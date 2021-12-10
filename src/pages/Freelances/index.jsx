import DefaultPicture from '../../assets/profile.png'
import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {useFetch, useTheme} from "../../utils/hooks";
import {Loader} from "../../utils/style/Atoms";


const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({theme}) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
  margin-left:300px;
  margin-right:300px;
  display: grid;
  gap: 30px;
  grid-template-rows: 400px 400px;
  grid-template-columns: repeat(3, 2fr);
  align-items: center;
  justify-items: center;

`


function Freelances() {
    const {theme} = useTheme()
    const {data, isLoading, isError} = useFetch(`http://localhost:8000/freelances`)
    const freelancersList = data?.freelancersList

    if (isError) {
        return <span>Oups il y a eu un problème</span>
    }
    console.log('freelances', freelancersList)
    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme}/>
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    )
}

export default Freelances