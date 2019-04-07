import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('RegisterUser')
export class RegisterUser {

  @JsonProperty('name')
  Name: string;

  @JsonProperty('email')
  Email: string;

  @JsonProperty('cpf')
  CPF: string;

  @JsonProperty('dateBirth')
  DateBirth: Date;

  @JsonProperty('pass')
  Password: string;
}
