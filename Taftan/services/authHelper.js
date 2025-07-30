import storage from '../config/storage';
import { savePreferences } from '../config/userPreferences';

const handleLogout = async (navigation, onClose) => {
  try {
    await storage.remove({ key: 'auth' })
    await savePreferences({ username: '', password: '' }); 

    onClose();
    navigation.replace('Login'); 
  } catch (error) {
    console.error('Logout Error:', error);
  }
};

export default handleLogout;
