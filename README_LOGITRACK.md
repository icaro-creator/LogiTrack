# LogiTrack - Núcleo Mobile

## Descrição
LogiTrack é uma aplicação mobile desenvolvida em React Native para gerenciamento e rastreamento de logística. O núcleo da aplicação fornece funcionalidades essenciais para monitorar remessas e gerenciar dados de logística em tempo real.

## Estrutura do Projeto

```
src/
├── screens/           # Telas da aplicação
│   ├── HomeScreen.js
│   ├── ShipmentsScreen.js
│   └── ProfileScreen.js
├── services/          # Serviços de API
│   └── api.js
├── store/             # Redux store
│   ├── index.js
│   └── shipmentReducer.js
└── components/        # Componentes reutilizáveis
```

## Funcionalidades

- **Home**: Dashboard inicial com informações gerais
- **Remessas**: Listagem e rastreamento de remessas
- **Perfil**: Informações do usuário logado

## Instalação

```bash
npm install
```

## Execução

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## Desenvolvimento

### Scripts disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm test` - Executa testes
- `npm run lint` - Verifica qualidade do código

## Dependências Principais

- **React Native**: Framework para desenvolvimento mobile
- **React Navigation**: Navegação entre telas
- **Redux**: Gerenciamento de estado
- **Axios**: Cliente HTTP para requisições

## API

A aplicação se conecta com a API em `https://api.logitrack.com/v1`

### Endpoints disponíveis

- `GET /shipments` - Lista todas as remessas
- `GET /shipments/{trackingId}` - Obtém detalhes de uma remessa
- `PUT /shipments/{trackingId}` - Atualiza status de uma remessa

## Licença

MIT

## Autor

icaro-creator
