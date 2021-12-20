import waiting_on_plane from '../assets/waiting_on_plane.jpg'



function Charities(props) {
    return (
        <div className='charities-main' >
             <br /> 
            <div style={{display: 'flex', flexDirection: 'row'}}>

            <div className='charities-picture' style={{ display: 'flex', height: '500px', width: '700px', padding: '20px'}}>
            <img src={waiting_on_plane} alt="Refugees wait on a US C-17 Globemaster"/>
            </div>
            <div className='charities-links' style={{padding: '20px'}}>
                <a href="https://getevacuated.com/">Get Evacuated</a> <br />
                <a href="https://www.taskforceargo.com/">Task Force Argo</a> <br />
                <a href="https://saveourallies.org/">Save Our Allies</a> <br />
                <a href="https://help.rescue.org/donate/afghanistan-aid">International Rescue Committee</a> <br />
                <a href="https://refugeerights.org/news-resources/evacuate-our-allies-coalition-members-call-for-more-support-for-afghanistan-evacuation">International Refugee Assistance Project</a> <br />
                <a href="https://irusa.org/">Islamic Relief USA</a> <br />
                <a href="https://www.reliefaid.org.nz/afghanistan-appeal/">Relief Aid NZ</a> <br />
            </div>
            </div>
        </div>
    )
}

export default Charities;