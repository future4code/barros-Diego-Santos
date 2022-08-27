import styled from "styled-components"
import saturn from "../../images/saturno.jpg"



export const TitleDiv = styled.h2 `
    color: #fff;
    text-align: center;
    text-shadow: 2px 1px 3px #ffaa00;
    font-size: 2.2rem;
`
//abaixo css Dos candidatos  e das pessoas aprovadas //
export const Button = styled.button `
    cursor: pointer;
`

export const DivButtons = styled.form `
`

export const PersonInfo = styled.p `
    line-height: 1.2rem;
    font-size: 20px;
`
export const DivInfo = styled.div `
`
// --------------------------------------//
export const Span = styled.span `
    font-weight: lighter;
    text-shadow: 1px 3px 4px violet;
    font-size:22px;
    color: #ffaa00;
`
// abaixo css Da viagem //
export const TripInfo = styled.p `
    color: #fff;
    font-size: 20px;
    margin: 20px;
    font-weight: 500;
    text-shadow: 1px 2px 2px #000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const DivTrip = styled.div `
    max-width: 600px;
    margin: 20px auto;
    padding: 10px;
    background-image: linear-gradient(45deg,  transparent 90%,#000 2%), url(${saturn});
    
    /* border: 1px solid chartreuse; */
    box-shadow: 1px 4px 3px #000;
    border-radius: 20px;

`
// ---------------------------------------/
    // esses 2 components é pra  organização
export const DivContainer = styled.div ``  
export const DivCentral = styled.div ``
//////////////////////////////////////////////

export const ContainerTripDetails = styled.div `
    flex:1;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    box-sizing: border-box;
    /* border: 1px solid chartreuse; */
    /* linear-gradient(900deg,  transparent 5%, #292929 15%, transparent 20% ), */
    background-image:  url(https://wallpaperboat.com/wp-content/uploads/2020/04/saturn-08.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 50px ;
    .divCentralDetail {
        max-width: 100vw;
        min-width: 280px;
        .btnToBack {
            margin: 5px 0 0 5px;
            padding: 10px 20px;
            font-size: 20px;
            border-radius: 10px;
            background-color: #303b45;
            color: #f3f3f3;
            :hover {
                color: orange;
                box-shadow: -1px 2px 3px orange;
            }
        }/////
        .containerPerson {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin: 20px;
            @media (max-width: 900px) { // esse @media é do containerPerson
                flex-direction: column;
                margin: 20px auto;
                max-width: 700px;
            }////////////////////
            .divCandidates {
                flex: 1;
                margin-top: 20px;
                box-shadow: 1px 3px 4px #000;
                border-radius: 20px;
                height: 500px;
                max-width: 650px;
                overflow-y: auto;
                border-top: 2px solid #000;
                .divInfoCandidate {
                    background-image: url(https://wallpaperboat.com/wp-content/uploads/2020/04/saturn-08.jpg);
                    padding: 20px;
                    margin: 20px;
                    border-radius: 10px;
                    ${PersonInfo} {
                        color: #fff;
                    }
                    ${DivButtons} {
                        display: flex;
                        margin: 10px 0;
                        ${Button} {
                            padding: 10px;
                            border: none;
                            border-radius: 6px;
                            background-color: #303b45;
                            font-size: 20px;
                        }
                        ${Button}:nth-child(1) {
                            margin-right: 10px;
                            :hover{
                                background-color: #e34042;
                                color:#fff;
                                box-shadow: -1px 1px 2px #fff;
                            }
                        }
                        ${Button}:nth-child(2) {
                
                            :hover{
                                background-color: #12af65;
                                color:#fff;
                                box-shadow: 1px 1px 2px #fff;
                            }
                        }
                    }//////
                }
            }//////////////////
            .divPerson {
                flex: 1;
                min-height: 200px;
                margin-top: 20px;
                box-shadow: 1px 3px 4px #000;
                border-radius: 20px;
                max-width: 650px;
                border-top: 2px solid #000;
                overflow-y: auto ;
                .divInfoPersonApproved {
                    background-image: url(https://wallpaperboat.com/wp-content/uploads/2020/04/saturn-08.jpg);
                    padding: 10px 20px;
                    margin: 5px 20px;
                    border-radius: 5px;
                    ${PersonInfo} {
                        color: #ffaa00;
                    }
                }
            }/////////////
        }/////////////
    }/////////////    
`