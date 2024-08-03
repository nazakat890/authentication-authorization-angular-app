export interface IFormStructure {
   type:string;
   name:string;
   label:string;
   value?: number | string | boolean ;
   options? :{ label:string; value: number | string | boolean }[];
   validations?: {
      name:string;
      validator:string;
      message:string;
   }[];
}