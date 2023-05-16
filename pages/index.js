import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import api from '../src/api/apicalls.js'
import { useEffect, useState } from 'react';
import CountryDropdown from '../components/CountryDropdown.jsx';
import StateDropdown from '../components/StateDropdown.jsx';
import Locations from '../components/Locations.jsx';
import StoreHours from '../components/StoreHours.jsx';
import { Container, Row } from 'reactstrap';

export default function Home(props) {
    const [countrySelected, setCountrySelected] = useState(props.country);
    const [stateSelected, setStateSelected] = useState('');
    const [stateObjects, setStateObjects] = useState([]);
    const [openCloseTimes, setOpenCloseTimes] = useState([])
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    /**
     * Set the location value and the openCloseTimes
     * @param value
     */
    const handleSelectLocation = (value)=> {
        let singleLocation = [...props.locations].filter(item => item.label === value);

        setSelectedLocation(value);
        setOpenCloseTimes(singleLocation[0].openCloseTimes);
    }

    /**
     * Get the location data based on the country selected
     */
    useEffect(()=> {
        let currentLocations = [...props.locations].filter(item => item.country === countrySelected)

        setLocations(currentLocations);
        switch (countrySelected) {
            case 'United States':
                setStateObjects(props.usStates);
                break;
            case 'Mexico':
                setStateObjects(props.mxStates);
                break;
            case 'Canada':
                setStateObjects(props.cnProvinces);
                break;
            default:
                setStateObjects(props.usStates);
                break;
        }
    }, [countrySelected]);

    /**
     * Set the locations based on the state selected
     */
    useEffect(()=> {
        let currentLocations = [...props.locations].filter(item => item.state === stateSelected)

        setLocations(currentLocations);
    }, [stateSelected]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome To Your Motion Billboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container className={'my-3'}>
            <Row style={{ display: 'flex', alignItems: 'start', flexDirection: 'row', width: '100%' }}>
                <div className={'col-6'}>
                  <CountryDropdown countrySelected={countrySelected} setCountrySelected={setCountrySelected}  />
                  <StateDropdown stateSelected={stateSelected} setStateSelected={setStateSelected} stateObjects={stateObjects} countrySelected={countrySelected}/>
                  <Locations locations={locations} handleSelectLocation={handleSelectLocation} selectedLocation={selectedLocation} />
                </div>
                <div className={'col-6'}>
                  <StoreHours openCloseTimes={openCloseTimes} />
                </div>
            </Row>
        </Container>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/motionlogo.avif" alt="Vercel" className={styles.logo}  />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps = async () => {
    let cnProvinces = await api.getCnProvinces();
    let mxStates = await api.getMxStates();
    let usStates = await api.getUsStates();
    let locations = await api.getLocations();
    let country = await api.getClientCountry();


    return {
        props: {
            cnProvinces,
            mxStates,
            usStates,
            locations,
            country
        },
    };
};
