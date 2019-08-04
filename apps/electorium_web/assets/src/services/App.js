import { Universal } from '@aeternity/aepp-sdk';
import Header from '@/components/Header/Index';
import Home from '@/components/Home/Index';
import Login from '@/components/User/Login';
import settings from '../settings';

var Ae = Universal;

export default {
    name: 'app',

    components: {
        Header,
        Home,
        Login
    },

    methods: {

       async getClient() {

           this.client = await Ae({
               url: settings.url,
               compilerUrl: settings.compilerUrl,
               nativeMode: true,
               keypair: { secretKey: settings.account.priv, publicKey: settings.account.pub }, 
               address: settings.account.pub,
               networkId: settings.networkId
           }).then(ae => {

               this.$store.dispatch('setAccount', ae);
               ae.height().then(height => {
                   console.log('Current Block Height:', height);

               }).catch(e => { console.log(e); });
           }).catch(e => { console.log(e); });
       }
    },
    async created() {
        await this.getClient();
    }
};
