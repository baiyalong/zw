/**
 * Created by yalong on 2015/6/1.
 */


Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'mall'});
Router.route('/cert', {name: 'certManage'});