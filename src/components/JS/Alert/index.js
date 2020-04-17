import Vue from 'vue';
import MessageBox from './messageBox.vue';

export const messageBox = (function(){

    return function( opts ){  //配置参数

        /* var defaults = {   //默认值
            title : '',
            content : '',
            cancel : '',
            ok : '',
            handleCancel : null,
            handleOk : null
        };
        Object.assign(defaults,opts); */

        /* for(var attr in opts){
            defaults[attr] = opts[attr];
        } */
  
        var mixin = {
            data: function () {
              return {   
                title : 'title',
                content : '',
                cancel : '',
                ok : '',
                handleCancel : null,
                handleOk : null
              }
            }
          }
          var MyComponent = Vue.extend(MessageBox);

        var vm = new MyComponent({
            // el : document.createElement('div'),
            mixins:[mixin],
            data : opts,
            methods : {
                handleCancel1(){
                    this.handleCancel && this.handleCancel.call(this);
                    document.body.removeChild( this.$el );
                },
                handleOk1(){
                    this.handleOk && this.handleOk.call(this);
                    document.body.removeChild( this.$el );
                }
            }
        }).$mount();

        document.body.appendChild( vm.$el );

    };

})();