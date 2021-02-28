import {Column} from "typeorm";
import LocalizedName from "../DimesnionCodes/localizedName";
import Vocabulary from "./vocabulary.entity";
const initialVocabularyForDatabase: Vocabulary[] = [];

const materialTable1: Vocabulary = {
    variableName : 'materialCode',
    localizedNames: [new LocalizedName('PL', 'Kod Materiału'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(materialTable1);
const materialTable2: Vocabulary = {
    variableName: 'materialName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Materiału'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(materialTable2);
const materialTable3: Vocabulary = {
    variableName: 'addNewMaterial',
    localizedNames: [new LocalizedName('PL', 'Dodaj Nowy Materiał'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(materialTable3);

const materialTable4: Vocabulary = {
    variableName: 'materialCodeMustContain6CHaracters',
    localizedNames: [new LocalizedName('PL', 'Kod materiału musi zawierać 6 znaków'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(materialTable4);

const materialTable5: Vocabulary = {
    variableName: 'updateMaterial',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj Materiał'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(materialTable5);




const generalTable1: Vocabulary = {
    variableName: 'quantity',
    localizedNames: [new LocalizedName('PL', 'Ilość'), new LocalizedName('CZE', 'Ilość po czesku')]
}
initialVocabularyForDatabase.push(generalTable1);
const generalTable2: Vocabulary = {
    variableName: 'search',
    localizedNames: [new LocalizedName('PL', 'Wyszukaj'), new LocalizedName('CZE', 'Wyszukaj po czesku')]
}
initialVocabularyForDatabase.push(generalTable2)
const generalTable3: Vocabulary = {
    variableName: 'deleteButtonInfo',
    localizedNames: [new LocalizedName('PL', 'Usuń'), new LocalizedName('CZE', 'Usuń po czesku')]
}
initialVocabularyForDatabase.push(generalTable3);
const generalTable4: Vocabulary = {
    variableName: 'updateButtonInfo',
    localizedNames: [new LocalizedName('PL', 'Modyfikuj'), new LocalizedName('CZE', 'Modyfikuj po czesku')]
}
initialVocabularyForDatabase.push(generalTable4);
const generalTable5: Vocabulary = {
    variableName: 'operationAddSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Dodano nowy rekord do bazy danych'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable5);
const generalTable6: Vocabulary = {
    variableName: 'operationAddFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się dodać nowego rekordu do bazy danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable6);


const generalTable7: Vocabulary = {
    variableName: 'operationUpdateSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Pomyślnie zaktualizowano wybrany rekord w bazie danych'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable7);
const generalTable8: Vocabulary = {
    variableName: 'operationUpdateFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się zaktualizować wybranego rekordu w bazie danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable8);

const generalTable9: Vocabulary = {
    variableName: 'operationDeleteSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Usunięto wybrany rekord'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalTable9);
const generalTable10: Vocabulary = {
    variableName: 'operationDeleteFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Nie udało się usunąć wybranego rekordu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable10);
const generalTable11: Vocabulary = {
    variableName: 'name',
    localizedNames: [new LocalizedName('PL', 'Nazwa'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable11);
const generalTable12: Vocabulary = {
    variableName: 'seeDrawing',
    localizedNames: [new LocalizedName('PL', 'Zobacz Rysunek'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable12);
const generalTable13: Vocabulary = {
    variableName: 'seeHistory',
    localizedNames: [new LocalizedName('PL', 'Zobacz Historię'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable13);

const generalTable14: Vocabulary = {
    variableName: 'code',
    localizedNames: [new LocalizedName('PL', 'Kod'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable14);

const generalTable15: Vocabulary = {
    variableName: 'select',
    localizedNames: [new LocalizedName('PL', 'Wybierz'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable15);
const generalTable16: Vocabulary = {
    variableName: 'closeButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Zamknij'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable16);
const generalTable17: Vocabulary = {
    variableName: 'thisFieldIsRequired',
    localizedNames: [new LocalizedName('PL', 'To pole jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable17);

const generalTable18: Vocabulary = {
    variableName: 'saveButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Zapisz'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable18);

const generalTable19: Vocabulary = {
    variableName: 'addNewButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Dodaj Nowy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable19);

const generalTable21: Vocabulary = {
    variableName: 'addNamesInAllLanguages',
    localizedNames: [new LocalizedName('PL', 'Podaj nazwy we wszystkich językach'), new LocalizedName('CZE', 'CZE ....')]
}

initialVocabularyForDatabase.push(generalTable21);

const generalTable22: Vocabulary = {
    variableName: 'selectDrawingToUpload',
    localizedNames: [new LocalizedName('PL', 'Wybierz rysunke do udostępnienia'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable22);

const generalTable23: Vocabulary = {
    variableName: 'selectingDrawingIsRequired',
    localizedNames: [new LocalizedName('PL', 'Wybranie rysunku jest wymagane'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable23);

const generalTable24: Vocabulary = {
    variableName: 'upload',
    localizedNames: [new LocalizedName('PL', 'Udostępnij'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable24);

const generalTable25: Vocabulary = {
    variableName: 'uploadingDrawingIsRequired',
    localizedNames: [new LocalizedName('PL', 'Udostępnienie rysunku jest wymagane'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable25);


const generalTable26: Vocabulary = {
    variableName: 'drawingAddedSuccessStatus',
    localizedNames: [new LocalizedName('PL', 'Dodano rysunek'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable26);

const generalTable27: Vocabulary = {
    variableName: 'drawingAddedFailerStatus',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd nie udało się dodać rysunku'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable27);

const generalTable28: Vocabulary = {
    variableName: 'onlyPngFormatIsAllowed',
    localizedNames: [new LocalizedName('PL', 'tylko format .png jest dozwolony'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable28);

const generalTable29: Vocabulary = {
    variableName: 'thisCodeIstaken',
    localizedNames: [new LocalizedName('PL', 'Podany kod jest już zajęty'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable29);

const generalTable30: Vocabulary = {
    variableName: 'thisNameIsTaken',
    localizedNames: [new LocalizedName('PL', 'Podana nazwa jest już zajęta'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable30);

const generalTable32: Vocabulary = {
    variableName: 'codeMustContain2Characters',
    localizedNames: [new LocalizedName('PL', 'Kod musi zawierać 2 znaki.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable32);

const generalTable33: Vocabulary = {
    variableName: 'otherRecordAlreadyExist',
    localizedNames: [new LocalizedName('PL', 'rekord który próbowałeś dodać już istnieję w bazie danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable33);

const generalTable34: Vocabulary = {
    variableName: 'otherRecordWithThisCodeAlreadyExist',
    localizedNames: [new LocalizedName('PL', 'inny rekord z podanym kodem już istnieje w bazie danych'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable34);

const generalTable35: Vocabulary = {
    variableName: 'otherRecordWithThisNameAlreadyExist',
    localizedNames: [new LocalizedName('PL', 'w bazie danych istnieje już inny rekord z podaną nazwą:'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable35);

const generalTable36: Vocabulary = {
    variableName: 'yes',
    localizedNames: [new LocalizedName('PL', 'Tak'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable36);

const generalTable37: Vocabulary = {
    variableName: 'no',
    localizedNames: [new LocalizedName('PL', 'Nie'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable37);

const generalTable38: Vocabulary = {
    variableName: 'confirmDeletingMessage',
    localizedNames: [new LocalizedName('PL', 'Czy na pewno chcesz usunąć wybrany element?'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalTable38);








const generalUser1: Vocabulary = {
    variableName: 'partnerCode',
    localizedNames: [new LocalizedName('PL', 'Kod parntera handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser1)
const generalUser2: Vocabulary = {
    variableName: 'partnerCompanyName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
const generalUser3: Vocabulary = {
    variableName: 'addNewBusinessPartner',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowego Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser3)
const generalUser4: Vocabulary = {
    variableName: 'addNewUser',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowego użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser4)

const generalUser5: Vocabulary = {
    variableName: 'fullName',
    localizedNames: [new LocalizedName('PL', 'Imię i nazwisko'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser5)
const generalUser6: Vocabulary = {
    variableName: 'email',
    localizedNames: [new LocalizedName('PL', 'email'), new LocalizedName('CZE', 'email')]
}
initialVocabularyForDatabase.push(generalUser6)

const generalUser7: Vocabulary = {
    variableName: 'changePassword',
    localizedNames: [new LocalizedName('PL', 'Zmień Hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser7)
const generalUser8: Vocabulary = {
    variableName: 'blockUser',
    localizedNames: [new LocalizedName('PL', 'Zablokuj Użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser8)
const generalUser9: Vocabulary = {
    variableName: 'unblockUser',
    localizedNames: [new LocalizedName('PL', 'Odblokuj użytkownika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser9)
const generalUser10: Vocabulary = {
    variableName: 'businessPartnerOrders',
    localizedNames: [new LocalizedName('PL', 'Zapytania o indeks worka'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser10)

const generalUser11: Vocabulary = {
    variableName: 'userStatusBlocked',
    localizedNames: [new LocalizedName('PL', 'Zablokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser11)
const generalUser12: Vocabulary = {
    variableName: 'userStatusActive',
    localizedNames: [new LocalizedName('PL', 'Aktywny'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser12)

const generalUser13: Vocabulary = {
    variableName: 'userHasBennBlockedMessage',
    localizedNames: [new LocalizedName('PL', 'Użytkownik został zablokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser13)
const generalUser14: Vocabulary = {
    variableName: 'userHasBeenUnblockedMessage',
    localizedNames: [new LocalizedName('PL', 'Użytkownik został odblokowany'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser14)
const generalUser15: Vocabulary = {
    variableName: 'admins',
    localizedNames: [new LocalizedName('PL', 'Administatorzy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser15)
const generalUser16: Vocabulary = {
    variableName: 'editors',
    localizedNames: [new LocalizedName('PL', 'Edytorzy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser16)

const generalUser17: Vocabulary = {
    variableName: 'userAddSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Dodano nowego użytkownika.'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(generalUser17);
const generalUser18: Vocabulary = {
    variableName: 'userAddFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd,  nie udało się dodać nowego użytkownika.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser18);


const generalUser19: Vocabulary = {
    variableName: 'userUpdateSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Pomyślnie zaktualizowano dane wybranego użytkownika.'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalUser19);
const generalUser20: Vocabulary = {
    variableName: 'userUpdateFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się zaktualizować danych użytkownika.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser20);

const generalUser21: Vocabulary = {
    variableName: 'userDeleteSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Usunięto wybranego użytkownika.'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalUser21);
const generalUser22: Vocabulary = {
    variableName: 'userDeleteFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się usunać wybranego użytkownika.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser22);

const generalUser23: Vocabulary = {
    variableName: 'partnerAddSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Dodano nowego Partnera Handlowego.'), new LocalizedName('CZE', 'Cze...')]
}
initialVocabularyForDatabase.push(generalUser23);
const generalUser24: Vocabulary = {
    variableName: 'partnerAddFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd,  nie udało się dodać nowego Partnera Handlowego.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser24);


const generalUser25: Vocabulary = {
    variableName: 'partnerUpdateSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Pomyślnie zaktualizowano dane wybranego Partnera Handlowego.'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalUser25);
const generalUser26: Vocabulary = {
    variableName: 'partnerUpdateFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się zaktualizować danych Partnera Handlowego.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser26);

const generalUser27: Vocabulary = {
    variableName: 'partnerDeleteSuccessStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Usunięto wybranego Partnera Handlowego.'), new LocalizedName('CZE', 'Dodano nowy rekord do bazy danych po czesku')]
}
initialVocabularyForDatabase.push(generalUser27);
const generalUser28: Vocabulary = {
    variableName: 'partnerDeleteFailerStatusMessage',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się usunać wybranego Partnera Handlowego.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser28);

const generalUser29: Vocabulary = {
    variableName: 'updateBusinessPartner',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj dane wybranego partnera handlowego.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser29);

const generalUser30: Vocabulary = {
    variableName: 'updateUser',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj dane wybranego użytkownika.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser30);
const generalUser31: Vocabulary = {
    variableName: 'emailIsAlreadyTaken',
    localizedNames: [new LocalizedName('PL', 'Podany email jest zajęty przez innego użytkownika.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser31);

const generalUser32: Vocabulary = {
    variableName: 'emailMustBeValid',
    localizedNames: [new LocalizedName('PL', 'Email musi być prawidłowym adresem email.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser32);

const generalUser33: Vocabulary = {
    variableName: 'passwordIsRequired',
    localizedNames: [new LocalizedName('PL', 'Podanie hasła jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser33);

const generalUser34: Vocabulary = {
    variableName: 'passwordMustContain8Characters',
    localizedNames: [new LocalizedName('PL', 'Hasło musi zawierać minimum 8 znaków.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser34);

const generalUser35: Vocabulary = {
    variableName: 'passwordMustContain1CapitalLetter',
    localizedNames: [new LocalizedName('PL', 'Hasło musi zawierać przynajmniej jedną dużą literę..'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser35);

const generalUser36: Vocabulary = {
    variableName: 'passwordMustContain2Digest',
    localizedNames: [new LocalizedName('PL', 'Hasło musi zawierać co najmniej 2 cyfry.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser36);

const generalUser37: Vocabulary = {
    variableName: 'passwordMustContain1smallLetter',
    localizedNames: [new LocalizedName('PL', 'Hasło musi zawierać co najmniej jedną małą literę.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser37);

const generalUser38: Vocabulary = {
    variableName: 'noMatchBetweenPasswords',
    localizedNames: [new LocalizedName('PL', 'Podane hasła są niezgodne.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser38);

const generalUser39: Vocabulary = {
    variableName: 'repeatPassword',
    localizedNames: [new LocalizedName('PL', 'Powtórz hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser39);

const generalUser40: Vocabulary = {
    variableName: 'repeatingPasswordIsRequired',
    localizedNames: [new LocalizedName('PL', 'Powtórzenie hasła jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser40);

const generalUser41: Vocabulary = {
    variableName: 'password',
    localizedNames: [new LocalizedName('PL', 'Hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser41);

const generalUser42: Vocabulary = {
    variableName: 'active',
    localizedNames: [new LocalizedName('PL', 'Aktywny'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser42);

const generalUser43: Vocabulary = {
    variableName: 'passwordChangeSuccessStatus',
    localizedNames: [new LocalizedName('PL', 'Hasło zostało zmienione.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser43);

const generalUser44: Vocabulary = {
    variableName: 'passwordChangeFailerStatus',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się zmienić hasła.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser44);

const generalUser45: Vocabulary = {
    variableName: 'admin',
    localizedNames: [new LocalizedName('PL', 'Administator'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser45);

const generalUser46: Vocabulary = {
    variableName: 'editor',
    localizedNames: [new LocalizedName('PL', 'Edytor'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser46);

const generalUser47: Vocabulary = {
    variableName: 'status',
    localizedNames: [new LocalizedName('PL', 'Status'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser47);

const generalUser48: Vocabulary = {
    variableName: 'changeYourPassword',
    localizedNames: [new LocalizedName('PL', 'Zmień swoje hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser48);

const generalUser49: Vocabulary = {
    variableName: 'currentPassword',
    localizedNames: [new LocalizedName('PL', 'Aktualne hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser49);

const generalUser50: Vocabulary = {
    variableName: 'newPassword',
    localizedNames: [new LocalizedName('PL', 'Nowe hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser50);

const generalUser51: Vocabulary = {
    variableName: 'wrongEmailOrPassword',
    localizedNames: [new LocalizedName('PL', 'Nieprawidłowy email lub hasło'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser51);

const generalUser52: Vocabulary = {
    variableName: 'yourAccountIsInactive',
    localizedNames: [new LocalizedName('PL', 'Nie możesz się zalogować, Twoje konto jest nieaktywne, skontaktuj się z administratorem'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser52);

const generalUser53: Vocabulary = {
    variableName: 'loginFailerStatus',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, logowanie niepomyślne'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser53);

const generalUser54: Vocabulary = {
    variableName: 'chooseLanguageVersion',
    localizedNames: [new LocalizedName('PL', 'Wybierz wersję językową, klikająć na flagę wybranego kraju.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser54);

const generalUser55: Vocabulary = {
    variableName: 'logInButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Zaloguj'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(generalUser55);










const orderName1: Vocabulary = {
    variableName: 'orderNumber',
    localizedNames: [new LocalizedName('PL', 'Nr Zapytania'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName1)
const orderName2: Vocabulary = {
    variableName: 'creator',
    localizedNames: [new LocalizedName('PL', 'Opracował'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName2)
const orderName3: Vocabulary = {
    variableName: 'index',
    localizedNames: [new LocalizedName('PL', 'Indeks'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName3)
const orderName4: Vocabulary = {
    variableName: 'date',
    localizedNames: [new LocalizedName('PL', 'Data'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName4)
const orderName5: Vocabulary = {
    variableName: 'createNewOrder',
    localizedNames: [new LocalizedName('PL', 'Dodaj Nowe Zapytanie'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName5)
const orderName6: Vocabulary = {
    variableName: 'businessPartner',
    localizedNames: [new LocalizedName('PL', 'Partner Handlowy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName6)

const orderName7: Vocabulary = {
    variableName: 'submitButtonNext',
    localizedNames: [new LocalizedName('PL', 'Dalej'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName7)
const orderName8: Vocabulary = {
    variableName: 'ChangeMaterialButtonInfo',
    localizedNames: [new LocalizedName('PL', 'Zmień materiał'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName8)
const orderName9: Vocabulary = {
    variableName: 'ConfirmMaterial',
    localizedNames: [new LocalizedName('PL', 'Zatwierdź materiał'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName9)
const orderName10: Vocabulary = {
    variableName: 'ChangePartner',
    localizedNames: [new LocalizedName('PL', 'Zmień Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName10)
const orderName11: Vocabulary = {
    variableName: 'ConfirmPartner',
    localizedNames: [new LocalizedName('PL', 'Zatwierdź Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName11)
const orderName12: Vocabulary = {
    variableName: 'ChangeProduct',
    localizedNames: [new LocalizedName('PL', 'Zmień parametry produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName12)

const orderName13: Vocabulary = {
    variableName: 'ConfirmProduct',
    localizedNames: [new LocalizedName('PL', 'Zatwierdź parametry produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName13)
const orderName14: Vocabulary = {
    variableName: 'submitOrder',
    localizedNames: [new LocalizedName('PL', 'Złóż zapytanie'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName14)
const orderName15: Vocabulary = {
    variableName: 'updateOrder',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj zapytanie'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName15)
const orderName16: Vocabulary = {
    variableName: 'canNotFindProductForGivenParameters',
    localizedNames: [new LocalizedName('PL', 'Nie znaleziono produktu o podanych parametrach.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName16)
const orderName17: Vocabulary = {
    variableName: 'orderAddSuccess',
    localizedNames: [new LocalizedName('PL', 'Utworzono nowe zapytanie.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName17)
const orderName18: Vocabulary = {
    variableName: 'orderAddFailer',
    localizedNames: [new LocalizedName('PL', 'Wystąpił bląd, nie udało się dodać nowego zapytania.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName18)

const orderName19: Vocabulary = {
    variableName: 'orderUpdateSuccess',
    localizedNames: [new LocalizedName('PL', 'Zaktualizowano wybrane zapytanie'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName19)
const orderName20: Vocabulary = {
    variableName: 'orderUpdateFailer',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd nie udało się zaktualizować zapytania.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName20)
const orderName21: Vocabulary = {
    variableName: 'orderDeleteSuccess',
    localizedNames: [new LocalizedName('PL', 'Usunięto wybrane zapytanie.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName21)
const orderName22: Vocabulary = {
    variableName: 'orderDeleteFailer',
    localizedNames: [new LocalizedName('PL', 'Wystąpił błąd, nie udało się usunąć wybranego zapytania.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName22)
const orderName23: Vocabulary = {
    variableName: 'choosingOptionFromListIsRequires',
    localizedNames: [new LocalizedName('PL', 'Wybranie opcji z listy jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName23)
const orderName24: Vocabulary = {
    variableName: 'choosingAndConfrimPartnerIsRequired',
    localizedNames: [new LocalizedName('PL', 'Wybranie i zatwierdzenie Partnera Handlowego jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName24)
const orderName25: Vocabulary = {
    variableName: 'choosingAndConfirmProductIsRequired',
    localizedNames: [new LocalizedName('PL', 'Wybranie i zatwierdzenie produktu jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName25)
const orderName26: Vocabulary = {
    variableName: 'choosingAndConfirmMaterialIsRequired',
    localizedNames: [new LocalizedName('PL', 'Wybranie i zatwierdzenie materiału jest wymagane.'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName26)
const orderName27: Vocabulary = {
    variableName: 'changeDrawingParameters',
    localizedNames: [new LocalizedName('PL', 'Zmień wymiary produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName27)
const orderName28: Vocabulary = {
    variableName: 'yourCommentToOrder',
    localizedNames: [new LocalizedName('PL', 'Twoje uwagi do zamówienia'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName28)
const orderName29: Vocabulary = {
    variableName: 'businessPartnerName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Partnera Handlowego'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName29)

const orderName31: Vocabulary = {
    variableName: 'productType',
    localizedNames: [new LocalizedName('PL', 'Typ produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName31)
const orderName32: Vocabulary = {
    variableName: 'productTop',
    localizedNames: [new LocalizedName('PL', 'Wykończenie Góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName32)
const orderName33: Vocabulary = {
    variableName: 'productBottom',
    localizedNames: [new LocalizedName('PL', 'Wykończenie Dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName33)
const orderName34: Vocabulary = {
    variableName: 'pressButtonToChooseProductByDrawing',
    localizedNames: [new LocalizedName('PL', 'Naciśńij przycisk aby wybrać produkt na podstawie rysunku'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName34)
const orderName35: Vocabulary = {
    variableName: 'chooseProductByDrawingButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Wybierz produkt klikając na rysunek'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName35)
const orderName36: Vocabulary = {
    variableName: 'chooseProductByParameters',
    localizedNames: [new LocalizedName('PL', 'Wybierz produkt określając jego parametry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName36)

const orderName37: Vocabulary = {
    variableName: 'productMaterial',
    localizedNames: [new LocalizedName('PL', 'Materiał produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName37)

const orderName38: Vocabulary = {
    variableName: 'updateProductBottom',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj wykończenie dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName38)

const orderName39: Vocabulary = {
    variableName: 'updateProductTop',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj wykończenie góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName39)

const orderName40: Vocabulary = {
    variableName: 'updateProductType',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj typ produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName40)

const orderName41: Vocabulary = {
    variableName: 'addNewProductBottom',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowe wykończenie dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName41)

const orderName42: Vocabulary = {
    variableName: 'addNewProductTop',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowe wykończenie góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName42)

const orderName43: Vocabulary = {
    variableName: 'addNewProductType',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowy typ produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName43)

const orderName44: Vocabulary = {
    variableName: 'addNewProduct',
    localizedNames: [new LocalizedName('PL', 'Dodaj nowy produkt'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName44)

const orderName45: Vocabulary = {
    variableName: 'updateProduct',
    localizedNames: [new LocalizedName('PL', 'Aktualizuj produkt'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName45)

const orderName46: Vocabulary = {
    variableName: 'productBottomCode',
    localizedNames: [new LocalizedName('PL', 'Kod Wykończenia Dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName46)

const orderName47: Vocabulary = {
    variableName: 'productBottomName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Wykończenia Dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName47)

const orderName48: Vocabulary = {
    variableName: 'productBottoms',
    localizedNames: [new LocalizedName('PL', 'Wykończenia Dna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName48)

const orderName49: Vocabulary = {
    variableName: 'productTops',
    localizedNames: [new LocalizedName('PL', 'Wykończenia Góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName49)

const orderName50: Vocabulary = {
    variableName: 'productTopsCode',
    localizedNames: [new LocalizedName('PL', 'Kod Wykończenia Góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName50)

const orderName51: Vocabulary = {
    variableName: 'productTopsName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Wykończenia Góry'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName51)

const orderName52: Vocabulary = {
    variableName: 'productTypes',
    localizedNames: [new LocalizedName('PL', 'Typy Produktów'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName52)

const orderName53: Vocabulary = {
    variableName: 'productTypeCode',
    localizedNames: [new LocalizedName('PL', 'Kod Typu Produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName53)

const orderName54: Vocabulary = {
    variableName: 'productTypeName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Typu Produktu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName54)

const orderName55: Vocabulary = {
    variableName: 'changeDrawing',
    localizedNames: [new LocalizedName('PL', 'Zmień Rysunek'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName55)


const orderName56: Vocabulary = {
    variableName: 'fillFormToCreateDimension',
    localizedNames: [new LocalizedName('PL', 'Wypełnij formularz aby utworzyć wymiar'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName56)

const orderName57: Vocabulary = {
    variableName: 'pressAndHoldLeftMouseButtonToDrag',
    localizedNames: [new LocalizedName('PL', 'Po utworzeniu: złap i przytrzymaj lewym przyciskiem aby przeciągnąc'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName57)

const orderName58: Vocabulary = {
    variableName: 'toRotateOrChangeSize',
    localizedNames: [new LocalizedName('PL', 'Aby obrócić lub zmienić rozmiar'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName58)

const orderName59: Vocabulary = {
    variableName: 'rightClickOnDrawing',
    localizedNames: [new LocalizedName('PL', 'naciśnij prawym przyciskiem na rysunku poza wymiarem'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName59)

const orderName60: Vocabulary = {
    variableName: 'dubleLeftClicToRotate',
    localizedNames: [new LocalizedName('PL', 'aby obrócić naciśnij dwukrotnie lewym przyciskiem na wymiar'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName60)

const orderName61: Vocabulary = {
    variableName: 'useActiveCornerToChangeSieze',
    localizedNames: [new LocalizedName('PL', 'aby zmienić rozmiar użyj aktywnego naroznika'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName61)

const orderName62: Vocabulary = {
    variableName: 'afterEditionRightClickTOenableDragging',
    localizedNames: [new LocalizedName('PL', 'po edycjj wymiaru naciśnij prawym przyciskiem poza wymiarem żeby ponownie uaktywnić tryb przeciągania'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName62)

const orderName63: Vocabulary = {
    variableName: 'rightCLickOnDimensionToRemove',
    localizedNames: [new LocalizedName('PL', 'aby usunąc wymiar najedź na niego kursorem i naciśnij prawym przyciskiem myszy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName63)

const orderName64: Vocabulary = {
    variableName: 'giveValuesToAllDimension',
    localizedNames: [new LocalizedName('PL', 'Prosze podać wartości wszystkich wymiarów'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName64)

const orderName65: Vocabulary = {
    variableName: 'giveValueOfWorkingTemperature',
    localizedNames: [new LocalizedName('PL', 'Prosze podać wartość temperatury pracy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName65)

const orderName66: Vocabulary = {
    variableName: 'setWorkignSide',
    localizedNames: [new LocalizedName('PL', 'Prosze zaznaczyć stronę pracującą'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName66)

const orderName67: Vocabulary = {
    variableName: 'allDimensionsMustBeUnique',
    localizedNames: [new LocalizedName('PL', 'Wszystkie wymiary muszą być unikalne, więcej niż jeden raz dodano wymiar: '), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName67)

const orderName68: Vocabulary = {
    variableName: 'addFirstIndexDimension',
    localizedNames: [new LocalizedName('PL', 'Proszę dodać wymiar będący pierwszym wymiarem indeksu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName68)

const orderName69: Vocabulary = {
    variableName: 'addSecondIndexDimension',
    localizedNames: [new LocalizedName('PL', 'Proszę dodać wymiar będący drugim wymiarem do indeksu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName69)

const orderName70: Vocabulary = {
    variableName: 'tooManyFirstIndexDimensions',
    localizedNames: [new LocalizedName('PL', 'Dodano więcej niż jeden wymiar będący pierwszym wymiarem indeksu. Można dodać tylko jeden'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName70)

const orderName72: Vocabulary = {
    variableName: 'tooManySecondIndexDimensions',
    localizedNames: [new LocalizedName('PL', 'Dodano więcej niż jeden wymiar będący drugim wymiarem indeksu. Można dodać tylko jeden'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName72)

const orderName73: Vocabulary = {
    variableName: 'confirmButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Zatwierdź'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName73)

const orderName74: Vocabulary = {
    variableName: 'printButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Drukuj'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName74)

const orderName75: Vocabulary = {
    variableName: 'addProduct',
    localizedNames: [new LocalizedName('PL', 'Dodaj Produkt'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName75)

const orderName76: Vocabulary = {
    variableName: 'backButtonDescription',
    localizedNames: [new LocalizedName('PL', 'Wstecz'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName76)

const orderName77: Vocabulary = {
    variableName: 'create',
    localizedNames: [new LocalizedName('PL', 'Utworz'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName77)

const orderName78: Vocabulary = {
    variableName: 'dimension',
    localizedNames: [new LocalizedName('PL', 'Wymiar'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(orderName78)










const drawingTableName1: Vocabulary = {
    variableName: 'workingTemperature',
    localizedNames: [new LocalizedName('PL', 'Temperatura Pracy'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName1);

const drawingTableName2: Vocabulary = {
    variableName: 'antielectrostatic',
    localizedNames: [new LocalizedName('PL', 'Antyelektrostatyczność'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName2);

const drawingTableName3: Vocabulary = {
    variableName: 'workingSide',
    localizedNames: [new LocalizedName('PL', 'Strona Pracująca'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName3);
const drawingTableName4: Vocabulary = {
    variableName: 'workingSideExternal',
    localizedNames: [new LocalizedName('PL', 'Zewnętrzna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName4);
const drawingTableName5: Vocabulary = {
    variableName: 'workingSideInternal',
    localizedNames: [new LocalizedName('PL', 'Wewnętrzna'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName5);

const drawingTableName6: Vocabulary = {
    variableName: 'material',
    localizedNames: [new LocalizedName('PL', 'Materiał'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(drawingTableName6);

const dimensionNames1: Vocabulary = {
    variableName: 'dimensionCode',
    localizedNames: [new LocalizedName('PL', 'Kod Wymiaru'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames1);

const dimensionNames2: Vocabulary = {
    variableName: 'dimensionRole',
    localizedNames: [new LocalizedName('PL', 'Rola Wymiaru'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames2);

const dimensionNames3: Vocabulary = {
    variableName: 'dimensionRoleFirstIndex',
    localizedNames: [new LocalizedName('PL', 'Pierwszy Wymiar Indeksu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames3);

const dimensionNames4: Vocabulary = {
    variableName: 'dimensionRoleSecondIndex',
    localizedNames: [new LocalizedName('PL', 'Drugi Wymiar Indeksu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames4);

const dimensionNames5: Vocabulary = {
    variableName: 'dimensionRoleNoIndex',
    localizedNames: [new LocalizedName('PL', 'Wymiar nie wchodzący do indeksu'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames5);

const dimensionNames6: Vocabulary = {
    variableName: 'dimensionName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Wymiaru'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames6);

const dimensionNames7: Vocabulary = {
    variableName: 'selectDimensionRole',
    localizedNames: [new LocalizedName('PL', 'Wybierz rolę wymiaru'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(dimensionNames7);

const languageNames1: Vocabulary = {
    variableName: 'languageCode',
    localizedNames: [new LocalizedName('PL', 'Kod Języka'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(languageNames1);

const languageNames2: Vocabulary = {
    variableName: 'languageName',
    localizedNames: [new LocalizedName('PL', 'Nazwa Języka'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(languageNames2);

const languageNames3: Vocabulary = {
    variableName: 'flag',
    localizedNames: [new LocalizedName('PL', 'Flaga'), new LocalizedName('CZE', 'CZE ....')]
}
initialVocabularyForDatabase.push(languageNames3);








export {initialVocabularyForDatabase};


