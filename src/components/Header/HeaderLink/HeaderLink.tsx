interface Props{
    onClick: () => void;
    displayValue: string;
}

const HeaderLink: React.FC<Props> = (props: Props) => {
    return <li 
        onClick={props.onClick}
        className="header-link">
            {props.displayValue}
    </li>
}
export default HeaderLink