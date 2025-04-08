import classNames from 'classnames';

type MarginViewProps = {
    margin: string | undefined;
}

export const Space = ({data}: { data: MarginViewProps }) => {
    let marginClass = '';

    switch (data.margin) {
        case 'mt-5':
        case 'mt-10':
        case 'mt-15':
        case 'mt-20':
        case 'mt-30':
            marginClass = data.margin;
            break;
        default:
            marginClass = '';
    }

    const classes = classNames(marginClass);
    return (
        <div className={classes}></div>
    );
}