/*
---
description: Well-indexed simple css/js tabs using mootools.

license: GPL

authors:
 - JS by Dmitry Dvorkin
 - css by Leonid Polyakov

provides: [dv_tabs]

requires:
 - core/1.4.5

...
*/

function tab_activate( _P, _idt, _idd) {
 var sfx = _idt + '_' + _idd;
 var ids = 'li[id^=tabh_' + _idt + ']';
 var els = ( _P ? _P.getElements( ids) : $$(ids));
 els.each(function( _vli, _kli){
   var cl = 'new_tab';
   if ( _vli.id == 'tabh_' + sfx) cl = 'new_tab_acted';
   _vli.set( 'class', cl);
 });
 var ids = 'div[id^=tabd_' + _idt + ']';
 var els = ( _P ? _P.getElements( ids) : $$(ids));
 els.each(function( _vd, _kd){
   var st = 'none';
   if ( _vd.id == 'tabd_' + sfx) st = 'block';
   _vd.setStyle( 'display', st);
 });
}

function tab_setup( _P) {
 var els = ( _P ? _P.getElements( '.new_tabs_head') : $$( '.new_tabs_head'));
 els.each( function( _vh, _kh){
   var t_id = _kh;
   _vh.getElements('li').each(function( _vli, _kli){
     // set id for identification
     _vli.set( 'id', 'tabh_' + t_id + '_' + _kli);
     // set styles for LIs
     _vli.set( 'class', 'new_tab');
     if ( _kli == 0) _vli.setStyle( 'margin-left', 0);
     // attach onclick event
     var P = _P;
     _vli.addEvent( 'click', function( _e){
       _e.stop()
       var xa = this.id.split( '_');
       if ( xa.length < 3) return;
       tab_activate( P, xa[ 1], xa[ 2]);
     });
   });
 });
 var els = ( _P ? _P.getElements( '.new_tabs_frame') : $$( '.new_tabs_frame'));
 els.each( function( _vf, _kf){
   var t_id = _kf;
   _vf.getElements('.tabdata').each( function( _vd, _kd){
     _vd.set( 'id', 'tabd_' + t_id + '_' + _kd);
     _vd.setStyle( 'display', 'none');
   });
   tab_activate( _P, _kf, 0);
 });
}
