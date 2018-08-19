angular.module("templates-main", ["src/directive/dirPaginationControls/template.html", "src/directive/inputAutocomplete/template.html", "src/directive/login-sidebar/template.html", "src/directive/routeLoadingIndicator/template.html", "src/module/dialog/pay/template.html", "src/module/include/loader/template.html", "src/module/route/home/template.html", "src/module/route/login/template.html", "src/module/route/manageProducts/template.html", "src/module/route/pos/template.html"]);

angular.module("src/directive/dirPaginationControls/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/dirPaginationControls/template.html",
    "<ul class=\"pagination\" ng-if=\"1 < pages.length || !autoHide\">\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a>\n" +
    "    </li>\n" +
    "\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("src/directive/inputAutocomplete/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/inputAutocomplete/template.html",
    "");
}]);

angular.module("src/directive/login-sidebar/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/login-sidebar/template.html",
    "<div class=\"sidebar-wrapper\">\n" +
    "	<ul class=\"sidebar-nav\">\n" +
    "		<li class=\"sidebar-brand\"><a href=\"#\">Start Bootstrap</a></li>\n" +
    "		<li><a href=\"#\">Dashboard</a></li>\n" +
    "		<li><a href=\"#\">Shortcuts</a></li>\n" +
    "		<li><a href=\"#\">Overview</a></li>\n" +
    "		<li><a href=\"#\">Events</a></li>\n" +
    "		<li><a href=\"#\">About</a></li>\n" +
    "		<li><a href=\"#\">Services</a></li>\n" +
    "		<li><a href=\"#\">Contact</a></li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "<div class=\"page-content-wrapper\">\n" +
    "	<div class=\"container-fluid\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-12\">\n" +
    "				<h1>Simple Sidebar</h1>\n" +
    "				<p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>\n" +
    "				<p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>\n" +
    "				<a href=\"#menu-toggle\" class=\"btn btn-default\" id=\"menu-toggle\">Toggle Menu</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/directive/routeLoadingIndicator/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/directive/routeLoadingIndicator/template.html",
    "<div class=\"container screenCentered animate-show-hide\">\n" +
    "	<div class=\"preloader-wrapper big active\">\n" +
    "		<div class=\"spinner-layer spinner-blue\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-red\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-yellow\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-green\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("src/module/dialog/pay/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/dialog/pay/template.html",
    "<div>\n" +
    "	<ng-form name=\"psForm\">\n" +
    "		<div class=\"form-group\">\n" +
    "			<label>Total: </label>\n" +
    "			<input type=\"text\" class=\"form-control\" ng-value=\"$vm.invoice.$getTotal() | currency:'$':0\" readonly>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "			<label>Pago: </label>\n" +
    "			<input type=\"text\" class=\"form-control\" ng-model=\"$vm.invoice.pay_amount\" ng-init=\"$vm.invoice.pay_amount = 0\" currency-input=\"\" autofocus ng-keypress=\"$event.which == 13 && $vm.invoice.isValid() && $vm.commit()\">\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "			<label>Vuelto: </label>\n" +
    "			<input type=\"text\" class=\"form-control\" ng-value=\"$vm.invoice.$getChange() | currency:'$':0\" readonly>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-12\">\n" +
    "				<button type=\"button\" class=\"btn btn-block btn-success\" ng-disabled=\"!$vm.invoice.$isValid()\" ng-click=\"$vm.commit()\">PAGAR</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ng-form>\n" +
    "</div>");
}]);

angular.module("src/module/include/loader/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/include/loader/template.html",
    "<div class=\"container screenCentered animate-show-hide\">\n" +
    "	<div class=\"preloader-wrapper big active\">\n" +
    "		<div class=\"spinner-layer spinner-blue\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-red\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-yellow\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spinner-layer spinner-green\">\n" +
    "			<div class=\"circle-clipper left\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"gap-patch\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div><div class=\"circle-clipper right\">\n" +
    "				<div class=\"circle\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("src/module/route/home/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/home/template.html",
    "<div class=\"carousel slide\">\n" +
    "	<div class=\"carousel-inner\">\n" +
    "		<div class=\"item active\">\n" +
    "			<img class=\"first-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"First slide\">\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"carousel-caption\">\n" +
    "					<h1>ESTIMADO<br>{{$currentUser().full_name | uppercase}}</h1>\n" +
    "					<p>TODO LO QUE NECESITA PARA GESTIONAR SU NEGOCIO.</p>\n" +
    "					<p class=\"visible-md visible-lg\"><a class=\"btn btn-primary\" ui-sref=\"pos\">Ir &raquo;</a></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container marketing\" ng-if=\"$currentUser().level > 1\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-lg-4\">\n" +
    "			<i class=\"fas fa-list-ol fa-10x\"></i>\n" +
    "			<h2>Inventario</h2>\n" +
    "			<p>Resumen de Inventario, últimas revisiones realizadas, ordenar por escacez de mercaderia, etc. [...]</p>\n" +
    "			<p><a class=\"btn btn-default\" href=\"#\" role=\"button\">Ir &raquo;</a></p>\n" +
    "		</div>\n" +
    "		<div class=\"col-lg-4\">\n" +
    "			<i class=\"fas fa-chart-pie fa-10x\"></i>\n" +
    "			<h2>Ventas</h2>\n" +
    "			<p>Revisar Compras y ventas, ordenadas por mes o dia, ver crecimiento de ganancias o rastrear horario punta de ventas, toda la informacion sobre el rendimiento de su negocio acá. [...]</p>\n" +
    "			<p><a class=\"btn btn-default\" href=\"#\" role=\"button\">Ir &raquo;</a></p>\n" +
    "		</div>\n" +
    "		<div class=\"col-lg-4\">\n" +
    "			<i class=\"fas fa-credit-card fa-10x\"></i>\n" +
    "			<h2>Contabilidad</h2>\n" +
    "			<p>Lleve en orden el pago de sus impuestos, el descuento en notas de créditos, así como ofertas o deudas pendientes a su favor.</p>\n" +
    "			<p><a class=\"btn btn-default\" href=\"#\" role=\"button\">Ir &raquo;</a></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("src/module/route/login/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/login/template.html",
    "<style type=\"text/css\">\n" +
    "body {\n" +
    "  padding-top: 40px;\n" +
    "  padding-bottom: 40px;\n" +
    "  background-color: #eee;\n" +
    "}\n" +
    "\n" +
    ".form-signin {\n" +
    "  max-width: 330px;\n" +
    "  padding: 15px;\n" +
    "  margin: 0 auto;\n" +
    "}\n" +
    "\n" +
    ".form-signin .form-control {\n" +
    "  position: relative;\n" +
    "  height: auto;\n" +
    "  -webkit-box-sizing: border-box;\n" +
    "  -moz-box-sizing: border-box;\n" +
    "  box-sizing: border-box;\n" +
    "  padding: 10px;\n" +
    "  font-size: 16px;\n" +
    "}\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"form-signin\">\n" +
    "  <ng-form name=\"lgForm\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <h2 class=\"form-signin-heading\">Porfavor Inicia Sesión</h2>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.form.rut\" ng-rut placeholder=\"R.U.T.\" required>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"password\" class=\"form-control\" ng-model=\"$ctrl.form.password\" ng-keypress=\"$event.which == 13 && lgForm.$valid && $ctrl.login()\" placeholder=\"contraseña\" required>\n" +
    "    </div>\n" +
    "    <button class=\"btn btn-lg btn-primary btn-block\" ng-click=\"$ctrl.login()\" ng-disabled=\"!lgForm.$valid\">Iniciar</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "</div>");
}]);

angular.module("src/module/route/manageProducts/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/manageProducts/template.html",
    "<div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "	<div class=\"panel panel-default\">\n" +
    "		<div class=\"panel-heading\" style=\"text-align: center;\">\n" +
    "			Administrar Productos\n" +
    "		</div>\n" +
    "		<div class=\"panel-body\">\n" +
    "			<table class=\"table table-centered table-hover table-bordered\">\n" +
    "				<thead>\n" +
    "					<tr class=\"info\">\n" +
    "						<th>#</th>\n" +
    "						<th>Codigo</th>\n" +
    "						<th>Nombre</th>\n" +
    "						<th>Stock</th>\n" +
    "						<th>Precio Unitario</th>\n" +
    "						<th>Editar</th>\n" +
    "						<th>Eliminar</th>\n" +
    "					</tr>\n" +
    "				</thead>\n" +
    "				<tbody>\n" +
    "					<tr dir-paginate=\"product in $ctrl.products | itemsPerPage: 10 track by product._id\">\n" +
    "						<td>{{product._id}}</td>\n" +
    "						<td>{{product.code}}</td>\n" +
    "						<td>{{product.name}}</td>\n" +
    "						<td>{{product.stock}}</td>\n" +
    "						<td>{{product.price | currency:'$':0}}</td>\n" +
    "						<td></td>\n" +
    "					</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("src/module/route/pos/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/module/route/pos/template.html",
    "<div class=\"col-lg-8 col-lg-offset-2\" style=\"padding: 60px 15px 0;\">\n" +
    "	<div class=\"panel panel-default\">\n" +
    "		<div class=\"panel-heading\">\n" +
    "			<input type=\"text\" class=\"form-control\" placeholder=\"Codigo de Barras\" ng-model=\"$ctrl.barCodeModel\" ng-keypress=\"$event.which == 13 && $ctrl.addToInvoice()\" autofocus ng-disabled=\"$ctrl.isPaying\">\n" +
    "		</div>\n" +
    "		<div class=\"panel-body\">\n" +
    "			<table class=\"table\" style=\"table-layout: fixed\">\n" +
    "				<thead>\n" +
    "					<tr>\n" +
    "						<th>PRODUCTO</th>\n" +
    "						<th style=\"text-align: center;\">PRECIO</th>\n" +
    "						<th style=\"text-align: center;\">CANTIDAD</th>\n" +
    "						<th style=\"text-align: center;\">TOTAL</th>\n" +
    "						<th style=\"text-align: center;\">ELIMINAR</th>\n" +
    "					</tr>\n" +
    "				</thead>\n" +
    "				<tfoot>\n" +
    "					<tr>\n" +
    "						<th class=\"active\">SubTotal</th>\n" +
    "						<td colspan=\"3\">{{$ctrl.invoice.$getSubTotal() | currency:\"$\":0}}</td>\n" +
    "						<td>{{$ctrl.invoice.$length()}} Productos</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th class=\"active\">Impuesto</th>\n" +
    "						<td colspan=\"3\">I.V.A. 19%</td>\n" +
    "						<td>{{$ctrl.invoice.$getTaxes() | currency:\"$\":0}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th class=\"active\">Descuento</th>\n" +
    "						<td colspan=\"4\">{{$ctrl.invoice.$getDiscounts() || \"N/A\"}}</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<th class=\"active\">Total</th>\n" +
    "						<td colspan=\"4\" class=\"info\">{{$ctrl.invoice.$getTotal() | currency:\"$\":0}}</td>\n" +
    "					</tr>\n" +
    "				</tfoot>\n" +
    "				<tbody class=\"info\">\n" +
    "					<tr ng-repeat=\"item in $ctrl.invoice.product_list track by $index\">\n" +
    "						<td>{{item.product_id.name}}</td>\n" +
    "						<td style=\"text-align: center;\">{{item.product_id.price | currency:\"$\":0}}</td>\n" +
    "						<td style=\"text-align: center;\">{{item.qty}}\n" +
    "							<div class=\"btn-group-vertical btn-group-xs\" role=\"group\" aria-label=\"...\">\n" +
    "								<button type=\"button\" class=\"btn btn-info\" ng-click=\"$ctrl.invoice.$plusOne(item)\"><i class=\"fas fa-plus\"></i></button>\n" +
    "								<button type=\"button\" class=\"btn btn-info\" ng-click=\"$ctrl.invoice.$minusOne(item)\"><i class=\"fas fa-minus\"></i></button>\n" +
    "							</div>\n" +
    "						</td>\n" +
    "						<td style=\"text-align: center;\">{{(item.product_id.price * item.qty) | currency:\"$\":0}}</td>\n" +
    "						<td style=\"text-align: center;\"><button type=\"button\" class=\"btn btn-danger\" ng-click=\"$ctrl.invoice.$remove(item)\"><i class=\"fas fa-times\"></i></button></td>\n" +
    "					</tr>\n" +
    "					<tr ng-show=\"$ctrl.invoice.$length() === 0\">\n" +
    "						<td colspan=\"5\" style=\"vertical-align: middle ;text-align: center; height: 100px\">Boleta Vacía (Escanea un Codigo)</td>\n" +
    "					</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "			<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\n" +
    "				<div class=\"btn-group\" role=\"group\">\n" +
    "					<button type=\"button\" class=\"btn btn-danger btn-lg\" ng-disabled=\"$ctrl.invoice.$length() === 0\" ng-click=\"$ctrl.resetInvoice()\">CANCELAR</button>\n" +
    "				</div>\n" +
    "				<div class=\"btn-group\" role=\"group\">\n" +
    "					<button type=\"button\" class=\"btn btn-success btn-lg\" ng-disabled=\"$ctrl.invoice.$length() === 0\" ng-click=\"$ctrl.payInvoice()\">PAGAR</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>");
}]);
