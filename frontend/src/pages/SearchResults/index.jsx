import React, { useCallback, useEffect, useState } from 'react';
import HeaderPage from '../../components/Header/index';
import { useHistory, useParams } from 'react-router-dom';
import { FiImage } from 'react-icons/fi'
import crypto from 'crypto-js';
import CarrosselCorpo from '../../components/Carrossel/index';
import api from '../../services/api';

import { Container, Content} from './styles';

import S3 from 'react-aws-s3';

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
}

const ReactS3Client = new S3(config);

const SearchPage = () => {
    const history = useHistory();
    const {placeId: place_id} = useParams();
    const [place, setPlace] = useState([]);
    const [newCommentary, setNewCommentary] = useState('');
    const [imgs, setImgs] = useState();
    const [imgData, setImgData] = useState([]);

    const getPlaces = useCallback(async () => {
        const response = await api.get(`/places/one/${place_id}`);
        setPlace([response.data])         
    }, [place_id])

    useEffect(() => {
        getPlaces()
    }, [place_id])

    const handleImageChange = useCallback(async (e) => {
        let files = e.target.files;
        let data = [];
        
        for(var i = 0; i < files.length; i++) {
            data.push(URL.createObjectURL(files[i]))
            if(data.length === files.length) {
                setImgData(data)

                if(window.confirm('Você está enviando novas imagens para esse lugar. Continuar?')) {
                    let imgsUrl = '';
                    const fileHash = crypto.lib.WordArray.random(10);
                    const fileName = `${fileHash}-${files[0].name}`
            
                    await ReactS3Client.uploadFile(files[0], fileName).then(async (file) => {
                        imgsUrl = `${file.location}`
                        const responseImg = await api.post(`/images/${place_id}`, { image: imgsUrl })
                        window.alert('As imagens foram adicionadas. Estamos atualizando a página');
                        getPlaces()
                    })
                } else {
                    window.alert('As imagens não foram adicionadas')
                }
            }
        }
        
    }, [imgData, imgs])


    const goToRegister = useCallback(() => {
        history.push('/cadastro')
    }, [])

    const saveCommentary = async () => {
        await api.post(`/commentary/${place_id}`, {commentary:newCommentary});
        setNewCommentary('')
        getPlaces()
    }

    useEffect(()=>{
    }, [newCommentary])

    return (
        <>            
           <HeaderPage searchPage onClick={goToRegister}/>

           <Container>
               
              
                <Content>
                    { place.map((lugar) => {
                        return(
                            <div key={lugar.id}>
                                <h1>{lugar.name}</h1> 
                                <h3>{lugar.address.city} - {lugar.address.state}</h3>
                                <CarrosselCorpo images={lugar.images}/>
                                <input type='file' style={{ position: 'absolute', visibility: 'hidden' }} id='image' onChange={handleImageChange}/>
                                <label for='image'>
                                    <div className="add-image">
                                        <div>
                                            <FiImage/>
                                            <span>Adicionar imagem</span>
                                        </div>
                                    </div>
                                </label>
                                <h2>TAGS relacionada ao lugar:</h2>
                                <div className="tags-div">
                                    {
                                        lugar.tags.map((tag)=>(
                                            <div className="tag" key={tag.id}>
                                                <span>{tag.tag}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <h2>Comentários:</h2>
                                <div className="comment">
                                    <div className="add-comment">
                                        <textarea onChange={(ev) => setNewCommentary(ev.target.value)}value={newCommentary}></textarea>
                                        <div className="submit-comment-div">
                                            <button onClick={saveCommentary}>Enviar</button>
                                        </div>
                                    </div>
                                    { lugar.commentary.map((commentary)=>(
                                        <div key={commentary.id} className="comment-text">
                                            <div className="header">
                                                <span>Adicionado em {commentary.createdAt}</span>
                                            </div>
                                            <p>{commentary.commentary}</p>
                                        </div>   
                                    ))

                                    }
                                </div>
                               
                            </div>
                        )
                    }) } 
                </Content>
           </Container>  
       </>
    )
}

export default SearchPage;
