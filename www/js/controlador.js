
$.controlador = {}

    


$.controlador.panel_activo="";

/**
 * Método para alternar entre paneles.
 */

$.controlador.activarPanel = function(panel_nuevo) {
    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo=panel_nuevo;
}



/**
 * Método para inicializar la aplicación
 */
$.controlador.init = function (panel_inicial)  {
    /* 
     +  $('[id^="menu_"]'): me devuelve la lista de todas las etiquetas
        que tienen un atributo ID que comienza por "menu_".
     +  $('[id^="menu_"]').each(mi_funcion): para cada elemento de la
        lista seleccionada, llama a "mi_funcion".
 
    */
    $('[id^="menu_"]').each(function()  {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controlador.activarPanel("#" + panel_id);
        });
        console.log("id_menu::" + menu_id + "  id_panel::" + panel_id);
    });
    
    $(".panel").hide();
    
    $.controlador.activarPanel("#"+panel_inicial);
}
