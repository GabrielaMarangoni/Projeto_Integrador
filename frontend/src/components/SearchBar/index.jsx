import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory } from 'react-router-dom';
import CityValues from '../../contents/city';
import { Container, Label, Label2, SelectCidade, SelectUF, ContainerTags, ButtonFilter} from './styles';
import api from '../../services/api';

const SearchBar =(props) =>{
    const [state, setState] = useState();
    const [tags, setTags] = useState([]);

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    const getTags = useCallback(async () => {
        const response = await api.get('/tags/all_filter');
        setTags(response.data);
    }, [])

    useEffect(() => {
        getTags()
    }, [])

     return (
        <Container>
            <div className="part-one">
                <Label>ESTADO</Label>
                <SelectUF onChange = {(e) => {
                    if(e.target.value === 'Selecione o Estado') {
                        props.undefinedCity()  
                        handleUF(e.target.value) 
                    } else {
                        handleUF(e.target.value)
                    }
                }} value = {state}>
                    <option key = 'init' value='Selecione o Estado'>Selecione o Estado</option>
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
            </div>

            <div className="part-two">
                <Label>TAGS DISPONÍVEIS </Label>

                <ContainerTags>
                    { tags.map(tag => (
                        <div>
                            <input type='checkbox' onChange={(e) => props.onChangeCheck(e.target.checked, tag)}/>
                            <label>{tag}</label>
                        </div>
                    )) }            
                </ContainerTags>
                
                <div className="button-div">
                    <ButtonFilter onClick={props.onClick}>
                        <Label2>Filtrar</Label2>
                    </ButtonFilter>
                </div>
            </div>
        </Container>
    )
}
export default SearchBar