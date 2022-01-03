import Banner from "../components/Banner"
import Layout from "../components/Layout"
import bannerData from "../content/bannerData"

export default function Home() {
  return (
    <Layout>
      {bannerData.map(({id, name, img}) => (
        <Banner key={id} name={name} img={img} />
      ))}
    </Layout>
  )
}