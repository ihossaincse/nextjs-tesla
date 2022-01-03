import Banner from "../components/Banner"
import Layout from "../components/Layout"

const dashboard = () => {
    return (
        <Layout>
            <Banner name="Stay Connected" img="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_960_720.jpg" dash={true} />
            <Banner name="Your Best Audio System" img="https://cdn.pixabay.com/photo/2021/01/01/21/09/challenger-5880009_960_720.jpg" dash={true} classTitle="text-white" />
            <Banner name="Real Storage" img="https://cdn.pixabay.com/photo/2014/04/27/00/43/traffic-332857_960_720.jpg" dash={true} />
        </Layout>
    )
}

export default dashboard
