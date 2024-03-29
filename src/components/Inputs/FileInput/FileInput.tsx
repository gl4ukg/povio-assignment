import React, {ChangeEvent, CSSProperties, useEffect, useState} from 'react';
import './FileInput.scss'
import PicIcon from '../../../assets/icons/pl-icon-photo.svg'
import { FileUpload } from '../../../types/fileUpload.types';

interface Props{
    style?: CSSProperties;
    labelKey?: string;
    name?: string;
    flat?: boolean;
    value: FileUpload;
    className?: string;
    multiple?: boolean
    setFiles: (file: FileUpload) => void;
    onChange?: () => void;
    accept?: string,
    errors?: string
    touched?: boolean
    validate?: (value: string) => string | undefined
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

    const setFileOnChange = (files: any) => {

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
    
    const returnErrorMessage = (errorMessage: string) => {
        return <p className='errorMessage'>{errorMessage}</p>
    }

    return <div className={`inputFileWrapper ${props.className}`}>
        <input 
            type="file" 
            id="fileInput"
            name={props?.name} 
            accept={props?.accept} 
            onChange={(e:ChangeEvent<HTMLInputElement>) => {setFileOnChange(e.target.files)}} 
            multiple={props.multiple} />
        <img src={PicIcon} alt="plus-icon" />
        <p className="m-0">{ fileLabel }</p>
        {props.errors && props.touched && returnErrorMessage(props.errors)}
    </div>
}

export default FileInput