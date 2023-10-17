import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact, IonImg, IonButton, IonItem,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (

  <>

  <IonItem>
      <IonLabel>
        <h1><b>Bem-vindo ao meu site</b></h1>
      </IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel>
        <p>Este e um paragrafo de exemplo</p>
      </IonLabel>
    </IonItem>

    <IonItem>
      <IonButton >CLique Aqui</IonButton>
    </IonItem>

    <IonItem>
      <IonLabel>
        <h2><b>Seção Importante</b></h2>
      </IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel>
        <p>Esta é uma seção com conteudo relevante</p>
      </IonLabel>
    </IonItem>

    <IonItem>
      <IonImg src="..\public\assets\marca.jpg" ></IonImg>
    </IonItem>



  </>

);

export default App;
