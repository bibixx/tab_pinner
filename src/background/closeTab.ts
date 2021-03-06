import { getStorageValues } from '../shared/getStorageValues';
import { getTranslatedText } from '../shared/getTranslatedText/getTranslatedText';

export default async function closeTab(tab: chrome.tabs.Tab) {
  if (tab.id === undefined) {
    return;
  }

  const { settings } = await getStorageValues();

  const close = settings.confirm
    // eslint-disable-next-line no-restricted-globals, no-alert
    ? confirm(getTranslatedText('close_conf_msg'))
    : true;

  if (close) {
    chrome.tabs.remove(tab.id);
  }
}
