export const Image = ({data}: {data: any}) => {
    return (
        <img
            src={import.meta.env.VITE_PUBLIC_STRAPI_API_URL + data.item.url}
            alt={data.item.alternativeText}
            className="w-full"
        />
    )
}