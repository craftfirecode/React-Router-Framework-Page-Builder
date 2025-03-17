export const Content = ({data}: { data: any }) => {
    return (
        <div dangerouslySetInnerHTML={{__html: data}}/>
    )
}