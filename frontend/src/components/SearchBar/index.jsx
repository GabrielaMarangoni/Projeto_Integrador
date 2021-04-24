import React, { useCallback, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory } from 'react-router-dom';
import CityValues from '../../contents/city';
import { Container, Label, Label2, SelectCidade, SelectUF, ContainerTags, ButtonFilter} from './styles';

const SearchBar =(props) =>{
    const history = useHistory();
    const [state, setState] = useState();
    const [city, setCity] = useState();

    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])

     return (
        <Container>
            <Label>ESTADO</Label>
                <SelectUF onChange = {(e) => handleUF(e.target.value)} value = {state}>
                    <option key = 'init'>Selecione o Estado</option>
                    {CityValues.estados.map((uf, index) => (
                        <option key ={index.toString()} value = {uf.sigla}>{uf.nome}</option>
                    ))}
                </SelectUF> 

            <Label>CIDADE</Label>
                <SelectCidade  onChange = {props.handleCity} value = {props.city}>
                    <option key = 'init'>Selecione a Cidade</option>
                    {CityValues.estados.find((city) => city.sigla == state)?.cidades.map((cities, index) => (
                        <option key ={index.toString()}  value = {cities}>{cities} </option>
                    ))}
                </SelectCidade> 

            <Label>TAGS DISPONÍVEIS </Label>

                <ContainerTags>
                    <h3>"aqui serão as opções de tags"</h3>
                    <h3>"terão varias caixinhas para selecionar"</h3> 
                    <h3>"aqui terei que utilizar scrollView, para que quando tiver uma quantidade de tags significativas o usuário consiga rodar(scroll) o containerTags e ter uma vião significativa de todas as tags..."</h3>                   
                </ContainerTags>
                
                <ButtonFilter onClick={props.onClick}>
                    <Label2>Filtrar</Label2>
                </ButtonFilter>
        </Container>
    )
}
export default SearchBar
