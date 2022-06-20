//import drowsy from "@faya/drowsy";

const drowsy = require('@faya/drowsy');
//import drowsy from '@faya/drowsy';

const config = {
    wp: {
        ver: '6.0',
        url: 'http://localhost:10038',
        user: 'admin',
        password: 'root'
    }
};

const newpost = {
    title: 'drowsy',
    type: 'blog',
    content: 'post this by drowsy!'
};

/* (async () => {
    const wp = await drowsy.launch(config);
    await wp.login();
    //await wp.post(newpost);
    //await wp.close();
})(); */
 async function seeFlowTest () {
    const wp = await drowsy.launch(config);
    await wp.login();
    
    
  }
  seeFlowTest()