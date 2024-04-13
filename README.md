# Caronte

O Caronte é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

# Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [] O organizador deve poser visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;
- [] Adicionar o campo externalId com a lib Nano Id

### Regras de negócio
 
 - [x] O participante só pode se inscrever em um evento uma única vez;
 - [] O participante só pode se inscrever em eventos com vagas disponíveis;
 - [] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais
 
 - [] O check-in no evento será realizado através de um QRCode;
