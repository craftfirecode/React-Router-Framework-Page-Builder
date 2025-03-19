import {Content} from "~/components/ui/content";
import {Image} from "~/components/ui/image";

export const ContentImage = ({data}: { data: any }) => {
    return (
        <div className={'grid gap-3 sm:grid-cols-1 md:grid-cols-2 items-center'}>
            <div>
                <Image data={data}/>
            </div>
            <div className={data.revert ? 'order-first md:order-last' : 'order-first'}>
                <Content data={data}/>
            </div>
        </div>
    )
}