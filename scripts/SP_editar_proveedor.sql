USE `restaurante`;
DROP procedure IF EXISTS `editar_proveedor`;

DELIMITER $$
USE `restaurante`$$
CREATE PROCEDURE `editar_proveedor` (
	IN in_idproveedor,
	IN in_nombre_proveedor VARCHAR(50),
	IN in_direccion_proveedor VARCHAR(50),
	IN in_descripcion VARCHAR(50)
)
BEGIN
	SET AUTOCOMMIT = 0;
    START TRANSACTION;
    
    UPDATE proveedores 
		SET nombre_proveedor = in_nombre_proveedor, direccion_proveedor = in_direccion_proveedor, descripcion=in_descripcion, updated_at = now()
		WHERE (idproveedor = in_idproveedor);
    
    SET AUTOCOMMIT = 1;
END$$

DELIMITER ;


    