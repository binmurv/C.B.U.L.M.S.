<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToContractExtendsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('contract_extends', function(Blueprint $table)
		{
			$table->foreign('contract_header_id', 'fk_extend_Contr')->references('id')->on('contract_headers')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('contract_extends', function(Blueprint $table)
		{
			$table->dropForeign('fk_extend_Contr');
		});
	}

}
