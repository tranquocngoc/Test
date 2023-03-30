import axios from 'axios';
import {useState, useEffect, useRef, useContext, useMemo} from 'react';
import {AbortController} from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import {AxiosContext} from '~/components/AxiosContext';

export default function useAxios(url, method, payload) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await instance.request({
          signal: controllerRef.current.signal,
          data: payload,
          method,
          url,
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [instance, method, payload, url]);

  return {cancel, data, error, loaded};
}
