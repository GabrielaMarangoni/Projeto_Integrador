import React, { useCallback, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CityValues from '../../contents/city';
import { FiImage } from 'react-icons/fi';


import { ContainerBranco, Line, Column, Row, ButtonCadastrar, Label, InputCadastro, SelectUF, SelectPesquisar, TextAreaCadastro, ImageInput, Gridlayout, ImgPreview } from './styles';
import HeaderPage from '../../components/Header/index'

const Registration =() =>{

    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [address, setAddress] = useState('');
    const [reference, setReference] = useState('');
    const [commentary, setCommentary] = useState('');
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [imgData, setImgData] = useState([]);
    const [imgs, setImgs] = useState();
    const history = useHistory();

    const handleImageChange = useCallback((e) => {
        let files = e.target.files;
        let data = [];
        
        for(var i = 0; i < files.length; i++) {
            data.push(URL.createObjectURL(files[i]))
            if(data.length === files.length) {
                setImgData(data)
            }
        }
        setImgs(files)
    }, [imgData, imgs])

    const handleUF = useCallback((estado) => {
        setState(estado)
    }, [state])

    // Essa função (Na verdade é uma constante que é interpretada como função) deve ser mudada toda vez que a cidade muda. O estado já é configurado
    // No proprio elemento Home. 
    // Dentro do [] precisa estar aquilo que tu está usando na função ou aquilo que a sua função depende
    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])

    const goToHome = useCallback(() => {
        history.goBack('/')
    }, [])

    const register = useCallback(() => {
        if(state && city && name && tags && address && commentary && imgs) {
            // Vamos separar as palavras agr
            // Obs: let é tipo var, mas processa um pouco mais rápido
            let realTags = tags.split(',');
            // Terá que pegar as tags do banco de dados e ver se alguma delas existem 
            // Se existir, será somente lincado com o id, caso contrário será adicionado e lincado
            
            
            console.log(realTags)

            // Aqui vai chamar o famoso backend

            console.log(`nome: ${name}\ntag: ${tags}\nendereço: ${address}\nnúmero/complemento: ${reference}\nestado: ${state}\ncidade: ${city}\ncommentary: ${commentary}\nimagens: ${imgs}\n`)
        } else if(state === undefined) {
            alert('Por favor preencha todos os campos necessários (*).')
        } else if(city === undefined) {
            alert('Por favor preencha todos os campos necessários (*).')
        } else if(!tags) {
            alert('Por favor preencha todos os campos necessários (*).')
        } else if(!imgs) {
            alert('Por favor preencha todos os campos necessários (*).')
        } else {
            alert('Por favor preencha todos os campos necessários (*).')
        }
    }, [name, tags, address, reference, state, city, commentary, imgs])
 
    // Aqui tu usou o React.Fragment que é algo que tu n acha no teu html real. ELE NÃO É UMA TAG. Tu não acha ele no inspect, por exemplo.
    // Por padrão, o React exige que haja um elemento pai e dentro todos os outros elementos. Por isso, antes, tudo estava dentro do Container.
    // Dessa vez, o Container não tem influência nenhuma no Header por não ter o elemento Header como filho dele

    // Observe que o header sem a props home não tem o botão exibido
    return (     
        <React.Fragment>
            
            <HeaderPage register  onClick={goToHome}/>
          
                <Line>
                    <ContainerBranco>
                        <Row>
                            <h1  font-weight = 'bold' >Cadastro do ponto de interesse</h1> 
                        </Row>
                      
                        <Row>
                            <Column>
                                <Label>*Nome do lugar</Label>
                                <InputCadastro value={name} onChange={(e) => setName(e.target.value)}/>

                                <Label>*Endereço</Label>
                                <InputCadastro value={address} onChange={(e) => setAddress( e.target.value)}/> 

                                <Label>*Estado</Label>
                                <SelectUF onChange = {(e) => handleUF(e.target.value)} value = {state}>
                                    <option key = 'init'>Selecione o Estado</option>
                                    {CityValues.estados.map((uf, index) => (
                                        <option key ={index.toString()} value = {uf.sigla}>{uf.nome}</option>
                                    ))}
                                </SelectUF>    
                            </Column>

                            <Column>
                                <Label>*Tags sobre o lugar (separe por vírgula)</Label>
                                { /* toUpperCase() deixa em caps lock */ }
                                <InputCadastro value={tags} onChange={(e) => setTags(e.target.value.toUpperCase())}/>

                                <Label>Número/Complemento</Label>
                                <InputCadastro value={reference} onChange={(e) => setReference(e.target.value)}/>

                                <Label>*Cidade</Label>
                                <SelectPesquisar  onChange = {(e) => handleCity(e.target.value)} value = {city}>
                                    <option key = 'init'>Selecione a Cidade</option>
                                    {CityValues.estados.find((city) => city.sigla == state)?.cidades.map((cities, index) => (
                                        <option key ={index.toString()}  value = {cities}>{cities} </option>
                                    ))}
                                </SelectPesquisar> 
                            </Column>
                        </Row>

                        <Row>
                            <Column style={{ width: '100%' }}>
                                <Label>*Comentário sobre o lugar</Label>        
                                <TextAreaCadastro value={commentary} onChange={(e) => setCommentary(e.target.value)}/> 
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{ width: '100%' }}>
                                <Label>*Imagem</Label>
                                { /* Aqui que vamos mexer. Aqui usamos a prpriedade style em uma tag html. Essa propriedade permite que a gente faça uma
                                    estilização no próprio código. A posição é absoluta (ela está acima dos componentes) e não há visibilidade. O próximo passo é
                                    mostrarmos qual lugar tera o efeito disso que foi escondido. Vamos estilizar o label agora */ }
                                <input type='file' style={{ position: 'absolute', visibility: 'hidden' }} id='image' multiple onChange={handleImageChange}/>
                                <ImageInput for='image'>
                                    <div>
                                        <section>
                                            <FiImage/>
                                        </section>
                                        <section className='section-two'>
                                            <span>Selecione uma imagem</span>
                                        </section>
                                    </div>
                                </ImageInput>
                            </Column>
                        </Row>

                        { (imgData && !!imgData.length) && (
                            <Row>
                                <Column style={{ width: '100%' }}>
                                    <Label>Imagens selecionadas</Label>
                                    <Row>
                                        <Gridlayout>
                                            {imgData.map(img => {
                                                return(
                                                    <ImgPreview src={img}/>
                                                )
                                            })}
                                        </Gridlayout>
                                    </Row>
                                </Column>
                            </Row>
                        ) }
                        
                        <Row>
                            <ButtonCadastrar onClick={register}>Cadastrar ponto de interesse</ButtonCadastrar>
                        </Row>
                    </ContainerBranco>
                </Line>
           
        </React.Fragment>

    )
}
export default Registration