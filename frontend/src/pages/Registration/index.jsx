import React, { useCallback, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CityValues from '../../contents/city';
import { FiImage } from 'react-icons/fi';
import crypto from 'crypto-js';
import api from '../../services/api'

import { ContainerBranco, Line, Column, Row, ButtonCadastrar, Label, InputCadastro, SelectUF, SelectPesquisar, TextAreaCadastro, ImageInput, Gridlayout, ImgPreview } from './styles';
import HeaderPage from '../../components/Header/index'

import S3 from 'react-aws-s3';

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
}

const ReactS3Client = new S3(config);

const Registration =() =>{

    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
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

    const handleCity = useCallback((city) => {
        setCity(city)
    }, [city])

    const goToHome = useCallback(() => {
        history.push('/')
    }, [])

    const register = useCallback(async () => {
        if(state && city && name && tags && commentary && imgs) {
            alert('Estamos fazendo o seu cadastro, por favor aguarde.')
            let imgsUrl = '';
            for(var a = 0; a < imgs.length; a++) {
                const fileHash = crypto.lib.WordArray.random(10);
                const fileName = `${fileHash}-${imgs[a].name}`
    
                if(a === 0) {
                    await ReactS3Client.uploadFile(imgs[a],fileName).then(async (file) => {
                        imgsUrl = `${file.location}`
    
                        if(imgs.length === 1) {
                            registerFunction(name, tags, state, city, commentary, imgsUrl)
                        }
                    })
                } else {
                    await ReactS3Client.uploadFile(imgs[a],fileName).then(async (file) => {
                        if(file.location !== undefined) {
                            imgsUrl = `${imgsUrl}, ${file.location}`

                            if(imgsUrl.split(',').length === imgs.length) {
                                registerFunction(name, tags, state, city, commentary, imgsUrl)
                            }
                        }
                    })
                }
    
            }
        } else {
            alert('Por favor, preencha todos os campos necessários (*).')
        }
    }, [name, tags, state, city, commentary, imgs])

    const registerFunction = useCallback((name, tags, state, city, commentary, images) => {
        api.post('/places/total', {
            name,
            city,
            state,
            tags,
            images,
            commentary
        }).then(() => history.push('/'))
    }, [])

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
                                            {imgData.map((img, index) => {
                                                return(
                                                    <ImgPreview src={img} key={index}/>
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