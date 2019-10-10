USE `restaurante`;
DROP procedure IF EXISTS `ver_proveedores`;

DELIMITER $$
USE `restaurante`$$
CREATE PROCEDURE `ver_proveedores` ()
BEGIN
	SELECT idproveedor, nombre_proveedor, direccion_proveedor, descripcion, updated_at, created_at
		FROM proveedores;
END$$

DELIMITER ;
