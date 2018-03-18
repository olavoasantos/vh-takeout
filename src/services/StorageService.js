
  /**
   * localStorage Service
  */
  export default (
    () => ($name) => {
      /**
       * set
       * ---
       * Salva dados com um nome especificado do localStorage.
       */
      const set = (data) => {
        localStorage.setItem($name, JSON.stringify(data));
      }

      /**
       * get
       * ---
       */
      const get = () => {
        return JSON.parse( localStorage.getItem($name) );
      }

      /**
       * remove
       * ---
       */
      const remove = () => {
        localStorage.removeItem($name);
      }

      /**
       * clear
       * ---
       */
      const clear = () => {
        localStorage.clear();
      }

      return { set, get, remove, clear };
    }
  )()
