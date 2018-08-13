<!DOCTYPE html>
<html ng-app="angularApp" ng-controller="mainController as mc" ng-strict-di>
<head>
  <title>Bolerplate</title>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <!-- start template tags -->
  <!-- end template tags -->
</head>
<body>
  <header>
    <ul id="login-side-nav" class="side-nav fixed">
      <li>
        <div class="user-view grey darken-3">
          <a><img class="circle" src="img/avatardefault.png"></a>
          <br>
        </div>
      </li>
      <ng-form name="lg">
        <li>
          <div input-field class="container row">
            <i class="fas fa-user-tie prefix"></i>
            <label class="active">Nombre de Usuario</label>
            <input type="text" id="loginUserName" ng-model="mc.form.name" placeholder=" " required>
          </div>
        </li>
        <li>
          <div input-field class="container row">
            <i class="fas fa-key prefix"></i>
            <label >Contraseña</label>
            <input type="password" id="loginUserPass" ng-model="mc.form.pass" autocomplete="new-password" placeholder=" " required>
          </div>
        </li>
        <li>
          <div class="container">
            <a class="btn btn-block waves-effect waves-light blue" ng-click="mc.logIn()" ng-disabled="!lg.$valid">LogIn</a>
          </div>
        </li>
      </ng-form>
    </ul>
    <ul id="apps-side-nav" class="side-nav fixed grey darken-4">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="img/sidenav-background.jpg">
          </div>
          <a><img class="circle center" ng-src="img/avatar{{$storage.currentUser.id}}.png"></a>
          <br>
        </div>
      </li>
      <li><div class="divider"></div></li>
      <li><a href="#!/Home" class="white-text"><i class="fas fa-house fa-2x white-text"></i>Home</a></li>
      <li><div class="divider"></div></li>
      <li><a href="#!/exit" class="white-text"><i class="fas fa-sign-out-alt fa-2x white-text"></i>LogOut</a></li>
    </ul>
    <a class="btn-floating btn-large btn-flat waves-effect waves-light button-collapse hide-on-med-and-up" data-activates="apps-side-nav"><i class="fas fa-plus"></i></a>
    
  </header>
  <main>
    <div class="row">
      <div class="col l12 s12">
        <ng-include src="'/src/module/include/loader/template.html'" ng-show="mc.isRouteLoading"></ng-include>
        <ng-view ng-show="!mc.isRouteLoading"></ng-view>
      </div>
    </div>
  </main>
  <footer class="footer grey darken-4" style="padding-top: 10px; padding-bottom: 10px;">
    <div class="container">
      <div class="footer-copyright left">
        <a class="grey-text text-lighten-4" href="mailto: l.arancibiaf@gmail.com">© <?php echo constant("envAuthor") ?> AngularJS Dev</a><br>
        <a class="grey-text text-lighten-4" href="/phpliteadmin.php">PHPLiteAdmin</a>
      </div>
      <div class="footer-copyright right">
        <a class="grey-text text-lighten-4" href="#!/">Compilación: <?php echo constant("envShortSHA") ?></a><br>
        <a class="grey-text text-lighten-4" href="#!/">Modo: <?php echo constant("envBranch") ?></a>
      </div>
    </div>
  </footer>
</body>
</html>