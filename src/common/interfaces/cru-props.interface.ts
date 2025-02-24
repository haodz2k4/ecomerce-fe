
//CRU is CREATE, READ AND UPDATE



export interface CruProps {
    openCreate: boolean;
    setOpenCreate: (value: boolean) => void;
    id: string;
}