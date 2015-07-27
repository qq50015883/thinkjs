'use strict';
/**
 * store base class
 */
export default class {
  /**
   * constructor
   * @param  {} args []
   * @return {}         []
   */
  constructor(...args){
    this.init(...args);
  }
  /**
   * init
   * @return {} []
   */
  init(config){
    this.config = think.extend({
      type: thinkCache.BASE
    }, config);
    
    this.data = thinkCache(this.config.type);
  }
  /**
   * get content
   * @param  {String} key []
   * @return {Promise}     []
   */
  get(key){
    return Promise.resolve(this.data[key]);
  }
  /**
   * set key content
   * @param {} key     []
   * @param {} content []
   */
  set(key, content){
    this.data[key] = content;
    return Promise.resolve();
  }
  /**
   * delete key
   * @param  {String} key []
   * @return {}     []
   */
  delete(key){
    delete this.data[key];
    return Promise.resolve();
  }
  /**
   * get all data
   * @return {} []
   */
  list(){
    return Promise.resolve(this.data);
  }
}