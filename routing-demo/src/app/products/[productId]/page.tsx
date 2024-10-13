export default function Product1({params}:
    {
        params: {productId: string}
    }
){
    return <h2>Product {params.productId}</h2>
}