import styled from 'styled-components';

export const Container = styled.div`
    height: fit-content;
    display: flex; 
    box-sizing: border-box;
`

export const Content = styled.div`
    width: 85vw;
    margin-left: 15vw;
    margin-right: auto;
    margin-top: 7vh; 
    padding: 100px 10vh 100px 30vh;
    display: flex;
    flex-direction: column;

    div {
        width: 85%;

        img {
            width: 100%;
        }

        h1 {
            font-size: 55px;
            font-weight: 700;
            margin-bottom: 0;
        }

        h2 {
            font-size: 37px;
            font-weight: 300;
            margin: 25px 0;
        }

        h3 {
            font-size: 30px;
            font-weight: 300;
            margin-bottom: 25px;
        }

        .add-image {
            margin-top: 5px;
            width: 100%;
           

            button {
                display: flex;
                align-items: center;
                padding: 5px 15px;
                margin-left: auto;
                background: #2e8d7f;
                color: #2F4F4F;
                cursor: pointer;
                user-select: none;

                transition: all .2s;

                &:hover {
                    filter: brightness(.8);
                }

                span {
                    margin-left: 10px;
                }
            }
        }

        .tags-div {
            display: flex;

            .tag {
                margin-right: 15px;
                width: fit-content;
                border-radius: 100px;
                background: #2e8d7f;
                padding: 10px 15px;
                border: 1px solid #2F4F4F;

                span {
                    margin: 0;
                    color: #2F4F4F;
                }
            }
        }

        .comment {
            width: 100%;
            display: flex;
            flex-direction: column;

            .add-comment {
                width: 100%;

                textarea {
                    width: 100%;
                    font-size: 20px;
                    background: transparent;
                    border-bottom: 1px solid #2F4F4F;
                    color: #2F4F4F;
                    height: 32px;
                }

                .submit-comment-div {
                    margin-top: 10px;

                    width: 100%;

                    button {
                        display: flex;
                        margin-left: auto;
                        padding: 5px 20px;
                        background: #2e8d7f;
                        color: #2F4F4F;
                        cursor: pointer;
                        user-select: none;

                        transition: all .2s;

                        &:hover {
                            filter: brightness(.8);
                        }
                    }
                }
            }

            .comment-text {
                margin-top: 17px;

                .header {
                    margin-bottom: 5px;
                
                    span {
                        font-size: 15px;
                        opacity: .7;
                    }
                }

                p {
                    font-size: 22px;
                }
            }
        }
    }    
`