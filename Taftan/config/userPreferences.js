import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFERENCES_KEY = '@user_preferences';
const FILTERS_KEY = '@filter_preferences';

// Default filter values
const defaultFilters = {
    DamageFilterEN: false,
    InstallFilterEN: false,
    siteFilterEN: false,
    projectFilterEN: false,
    periodicFilterEN: false
};

// Save user preferences
const savePreferences = async (data) => {
    try {
        await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
};

// Read user preferences
const readPreferences = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(PREFERENCES_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

// Save filter preferences
const saveFilterPreferences = async (filters) => {
    try {
        await AsyncStorage.setItem(FILTERS_KEY, JSON.stringify(filters));
    } catch (e) {
        console.log(e);
    }
};

// Read filter preferences
const readFilterPreferences = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(FILTERS_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : defaultFilters;
    } catch (e) {
        console.log(e);
        return defaultFilters;
    }
};

// Update specific filter
const updateFilter = async (filterName, value) => {
    try {
        const currentFilters = await readFilterPreferences();
        const updatedFilters = {
            ...currentFilters,
            [filterName]: value
        };
        await saveFilterPreferences(updatedFilters);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

// Reset user preferences
const resetPreferences = async () => {
    try {
        await AsyncStorage.removeItem(PREFERENCES_KEY);
        await AsyncStorage.removeItem(FILTERS_KEY);
        return true;
    } catch (exception) {
        return false;
    }
};

module.exports = {
    savePreferences,
    readPreferences,
    saveFilterPreferences,
    readFilterPreferences,
    updateFilter,
    resetPreferences,
    defaultFilters
}; 