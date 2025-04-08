import {Content} from "~/components/ui/content";
import {Image} from "~/components/ui/image";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";

export const ContentImage = ({data}: { data: any }) => {
    return (
        <div className={'grid gap-3 md:grid-cols-1 lg:grid-cols-2 items-center'}>
            <div>
                <Image data={data}/>
            </div>
            <div className={data.revert ? 'order-last' : 'md:order-last lg:order-first'}>
                <Content data={data}/>
                {data.button && (
                    <div className="mt-5">
                        <Link to={data.button.to}>
                            <Button>{data.button.value}</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}