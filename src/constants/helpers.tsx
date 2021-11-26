// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {Dispatch, useEffect, useState} from 'react';
import {Linking, Platform, I18nManager, Alert} from 'react-native';
export enum AsyncKeys {
   IS_LOGIN = 'IS_LOGIN',
   USER_DATA = 'USER_DATA',
   PHONE_NUMBER = 'PHONE_NUMBER',
   LANGUAGE = 'LANGUAGE',
   MAIN_SPACE = 'MAIN_SPACE',
   DEVICE_TOKEN = /**
    * open any link and check is a valid link
    * @param url link
    */ 'DEVICE_TOKEN',
}
/**
 * save reduser keys on Async Storage
 */
export class PersistConfig {
   key: string;
   // storage: import('@react-native-community/async-storage').AsyncStorageStatic;
   storage: AsyncStorage;
   whitelist?: any;
   constructor(key: string, ...whitelist: any) {
      this.key = key;
      this.storage = AsyncStorage;
      this.whitelist = whitelist;
   }
}
