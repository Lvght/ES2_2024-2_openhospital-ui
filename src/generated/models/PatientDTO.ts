// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Class representing a patient
 * @export
 * @interface PatientDTO
 */
export interface PatientDTO {
  /**
   * @type {number}
   * @memberof PatientDTO
   */
  readonly code?: number;
  /**
   * First name of the patient
   * @type {string}
   * @memberof PatientDTO
   */
  firstName: string;
  /**
   * Last name of the patient
   * @type {string}
   * @memberof PatientDTO
   */
  secondName: string;
  /**
   * @type {string}
   * @memberof PatientDTO
   */
  readonly name?: string;
  /**
   * Birth date
   * @type {string}
   * @memberof PatientDTO
   */
  birthDate?: string;
  /**
   * Age
   * @type {number}
   * @memberof PatientDTO
   */
  age: number;
  /**
   * Age type
   * @type {string}
   * @memberof PatientDTO
   */
  agetype?: string;
  /**
   * Sex
   * @type {string}
   * @memberof PatientDTO
   */
  sex: PatientDTOSexEnum;
  /**
   * Address
   * @type {string}
   * @memberof PatientDTO
   */
  address?: string;
  /**
   * City
   * @type {string}
   * @memberof PatientDTO
   */
  city: string;
  /**
   * @type {string}
   * @memberof PatientDTO
   */
  readonly nextKin?: string;
  /**
   * Telephone
   * @type {string}
   * @memberof PatientDTO
   */
  telephone?: string;
  /**
   * Note
   * @type {string}
   * @memberof PatientDTO
   */
  note?: string;
  /**
   * Mother\'s name
   * @type {string}
   * @memberof PatientDTO
   */
  motherName: string;
  /**
   * Mother\'s status (D=dead, A=alive)
   * @type {string}
   * @memberof PatientDTO
   */
  mother?: PatientDTOMotherEnum;
  /**
   * Father\'s name
   * @type {string}
   * @memberof PatientDTO
   */
  fatherName: string;
  /**
   * Father\'s status (D=dead, A=alive)
   * @type {string}
   * @memberof PatientDTO
   */
  father?: PatientDTOFatherEnum;
  /**
   * Blood type (0-/+, A-/+ , B-/+, AB-/+)
   * @type {string}
   * @memberof PatientDTO
   */
  bloodType: string;
  /**
   * HasInsurance (Y=Yes, N=no)
   * @type {string}
   * @memberof PatientDTO
   */
  hasInsurance?: PatientDTOHasInsuranceEnum;
  /**
   * Parent together (Y=Yes, N=no)
   * @type {string}
   * @memberof PatientDTO
   */
  parentTogether?: PatientDTOParentTogetherEnum;
  /**
   * Tax code
   * @type {string}
   * @memberof PatientDTO
   */
  taxCode?: string;
  /**
   * Lock
   * @type {number}
   * @memberof PatientDTO
   */
  lock?: number;
  /**
   * BlobPhoto
   * @type {string}
   * @memberof PatientDTO
   */
  blobPhoto?: string;
  /**
   * @type {number}
   * @memberof PatientDTO
   */
  readonly hashCode?: number;
  /**
   * Allergies of patient
   * @type {string}
   * @memberof PatientDTO
   */
  allergies?: string;
  /**
   * Current anamnesis
   * @type {string}
   * @memberof PatientDTO
   */
  anamnesis?: string;
  /**
   * Status
   * @type {string}
   * @memberof PatientDTO
   */
  status?: PatientDTOStatusEnum;
  /**
   * Consensus flag
   * @type {boolean}
   * @memberof PatientDTO
   */
  consensusFlag?: boolean;
  /**
   * Consensus service flag
   * @type {boolean}
   * @memberof PatientDTO
   */
  consensusServiceFlag?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum PatientDTOSexEnum {
  M = "M",
  F = "F",
  TM = "T",
  TF = "D"
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOMotherEnum {
  D = "D",
  A = "A",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOFatherEnum {
  D = "D",
  A = "A",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOHasInsuranceEnum {
  Y = "Y",
  N = "N",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOParentTogetherEnum {
  Y = "Y",
  N = "N",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOStatusEnum {
  I = "I",
  O = "O",
}
