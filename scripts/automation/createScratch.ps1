$userstory =  $args[0]
$description =  $args[1]
$dias = $args[2] ? $args[2]: 7
$definitionFile = $args[3] ? '.\config\scratch-with-omni.json' : '.\config\squada-scratch-def.json'
$email =  $userstory + '@teco.com.ar'

if ( $args[0] -AND $args[1] ) {
#    sf org list --clean --no-prompt
    git branch $userstory
    git checkout $userstory
    sf org create scratch -y $dias -a $userstory -d -w 10 --username $email --definition-file $definitionFile
    sfdx force:user:password:generate
    sfdx force:source:push
    sfdx force:user:permset:assign -n dreamhouse
    sf data import tree --plan .\data\sample-data-plan.json
    sfdx force:user:display
    if ( $omni ) {
        echo y | sf package install --package 04t5c000000o7RXAAY -w 1000
    }
} else {
    write-host("createScratch story-id story-subject days isOmni.
    ejemplo createScratch BSCCC22 'Cambiar Funcionalidad' 30 Yes")
}