import React, {ChangeEvent, CSSProperties, useEffect, useState} from 'react';
import './FileInput.scss'
import PlusIconLink from '../../../assets/icons/plus.svg'
import {connect} from "react-redux";
import { FileUpload } from '../../../types/fileUpload.types';

interface Props{
    style?: CSSProperties;
    labelKey?: string;
    name?: string;
    flat?: boolean;
    value: FileUpload;
    bordered?: boolean;
    className?: string;
    multiple?: boolean
    setFiles: (file: FileUpload) => void;
    onChange?: () => void;
    accept?: string,
}

const FileInput: React.FC<Props> = (props: Props) => {

    const [fileLabel, setFileLabel] = useState<string>( props.labelKey ? props.labelKey : "Add a Photo")

    useEffect(() => {
        if (props.value?.fileName) {
            setFileLabel(props.value?.fileName)
        }else{
            setFileLabel(props.labelKey ? props.labelKey :  "Add a Photo")
        }
    }, [props.value])

    function setFileOnChange(files: any){

        if(files.length !== 0){
            if(props.multiple){
                let allFiles = []
                for (let i = 0; i < files.length; i++) {
                    allFiles.push({
                        file: files[i],
                        fileName: files[i].name
                    })
                }
                setFileLabel(`${allFiles.length} file te selektuara `)
                // props.setFiles(allFiles as Array<any>)
            }else{
                setFileLabel(files[0].name)
                props.setFiles({
                    fileName: files[0].name,
                    file: files[0]
                })
            }
        }else{
            setFileLabel(props.labelKey ? props.labelKey : "Asnje file i selektuar")
        }
    }

    return <div className={`mikaInputFileWrapper ${props.className}`}>
        <input 
            type="file" 
            id={'fileInput'} 
            name={props?.name} 
            accept={props?.accept} 
            onChange={(e:ChangeEvent<HTMLInputElement>) => {setFileOnChange(e.target.files)}} 
            multiple={props.multiple} />
        <p className={'m-0'}>{ fileLabel }</p>
        <img src={PlusIconLink} alt="plus-icon" />
    </div>
}

export default FileInput