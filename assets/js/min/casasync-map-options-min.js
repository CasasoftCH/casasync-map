jQuery(document).ready(function($){var t=!0,e=wp.media.editor.send.attachment;$(".casasync_map_upload").click(function(a){var n=wp.media.editor.send.attachment,i=$(this),d=i.attr("id").replace("_button","");return t=!0,wp.media.editor.send.attachment=function(a,n){return t?(console.log(n),$("#"+d).val(n.id),$("#"+d+"_src").prop("src",n.sizes.full.url),void 0):e.apply(this,[a,n])},wp.media.editor.open(i),!1}),$(".add_media").on("click",function(){t=!1})});