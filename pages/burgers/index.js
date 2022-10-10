
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:4000/items');
    const data =  await res.json();
    
    return{
        props:{
            burgers: data
        }
    }
}


const Burgers = (props) => {
    console.log('props >>>> ', props);
    return (
        <div>
            <h1>Our Burgers</h1>
        </div>
    )
 }
 export default Burgers;