import styled from 'styled-components';
import {useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { postArticleAPI } from '../actions';

const SignUP
 = (props) => {
    const [ editorText, setEditorText ] = useState("");
    const [ shareImage, setShareImage ] = useState("");
    
    const signUp = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget){
            return;
        }

        const payload = {
            image: shareImage,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        props.SignUp(payload);
        reset(e);
    };


    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        props.handleClick(e);
    }

    return (
    <>
     { props.ShowSign === 'open' && 
        <Container>
            <Content>
                <Header>
                    <h2>Sign up Now </h2>
                    <button onClick={(event) => reset(event)}>
                        <img src="/images/close-icon.png" alt="" />
                    </button>
                </Header> 
                <SharedContent>
                <Editor>
                    <textarea value={editorText} 
                        onChange={(e) => setEditorText(e.target.value)}
                        placeholder="What do you want to talk about?"
                        autoFocus={true}
                    />
                    <input type="text" placeholder="Name "  autoFocus={true}/>
                    <input type="email" placeholder="Name " autoFocus={true} />
                    <input type="date" name="birthday" />
                    <input type="password" placeholder="*********** " autoFocus={true} />
                </Editor>
                </SharedContent>
                <ShareCreation>

                   <SignUpButton disabled={!editorText ? true : false}
                   onClick={(event) => signUp(event)}>
                       post
                   </SignUpButton>

                </ShareCreation>
            </Content>
            
        </Container>
     }
    </>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        cursor: pointer;
        svg, img {
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;

`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const SignUpButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" :"#0a66c2")};
    color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
    cursor: pointer;
    &:hover {
        background:${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")} ;
    }
`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUP
    );