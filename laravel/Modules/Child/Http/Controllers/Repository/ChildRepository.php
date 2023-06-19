<?php

namespace Modules\Child\Http\Controllers\Repository;

use Modules\Evaluation\Entities\ChildScores;
use Modules\Evaluation\Entities\EvaluationResults;
use Modules\Evaluation\Entities\sideProfile;

class ChildRepository
{
    public static function getChildWithSideProfile($child)
    {

        return EvaluationResults::selectRaw("evaluations.id evaluations_id, side_profiles.id side_profile_id , evaluations.title evaluation_title , side_profiles.title side_profile_title")
            ->leftJoin("evaluations", "evaluation_results.evaluation_id", '=', 'evaluations.id')
            ->leftJoin("side_profiles", "side_profiles.id", '=', 'evaluations.side_profile_id')
            ->where('evaluation_results.child_id', $child->id)
            ->groupBy("evaluations.id","side_profiles.id","evaluations.title","side_profiles.title")
            ->get();
    }
}
