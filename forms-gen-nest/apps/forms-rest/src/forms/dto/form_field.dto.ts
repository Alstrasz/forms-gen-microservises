import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsIn, IsString } from 'class-validator';

@Exclude()
export class FormFieldAnyDto {
    @Expose()
    @IsString()
    name: string;

    @Expose()
    @IsString()
    description: string;

    @Expose()
    @IsString()
    @IsIn( ['input', 'textarea', 'select'] )
    type: string;

    constructor ( data: FormFieldAnyDto ) {
        Object.assign( this, data );
    }
}

@Exclude()
export class FormFieldInputDto extends FormFieldAnyDto {
    @Expose()
    type: 'input' = 'input';

    constructor ( data: FormFieldInputDto ) {
        super( data );
    }
}

@Exclude()
export class FormFieldTextAreaDto extends FormFieldAnyDto {
    @Expose()
    type: 'textarea' = 'textarea';

    constructor ( data: FormFieldTextAreaDto ) {
        super( data );
    }
}

@Exclude()
export class FormFieldSelectDto extends FormFieldAnyDto {
    @Expose()
    type: 'select' = 'select';

    @Expose()
    @IsArray()
    @IsString( { each: true } )
    options: Array<string>;

    constructor ( data: FormFieldSelectDto ) {
        super( data );
    }
    def () { }
}

export type FormFieldDto = FormFieldInputDto | FormFieldTextAreaDto | FormFieldSelectDto;
