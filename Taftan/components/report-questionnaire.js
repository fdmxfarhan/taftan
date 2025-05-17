import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loadQuestionnaireWithQuestionList } from '../services/report-load-questionnaire';

const ReportQuestionnaire = ({ setIsValid, answers, setAnswers, descriptions, setDescriptions, requestId }) => {
    const [expandedGroups, setExpandedGroups] = useState({});
    const [questionnaires, setQuestionnaires] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadQuestionnaires = async () => {
            if (!requestId) return;
            
            try {
                const response = await loadQuestionnaireWithQuestionList(requestId);
                if (response.success) {
                    setQuestionnaires(response.data);
                    // Initialize all groups as expanded with unique identifiers
                    const initialExpandedGroups = {};
                    response.data.forEach(questionnaire => {
                        questionnaire.Questions.forEach(category => {
                            const uniqueGroupId = `${questionnaire.Id}_${category.categoryId}`;
                            initialExpandedGroups[uniqueGroupId] = true;
                        });
                    });
                    setExpandedGroups(initialExpandedGroups);
                }
            } catch (error) {
                console.error('Error loading questionnaires:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadQuestionnaires();
    }, [requestId]);

    useEffect(() => {
        // Check if all questions in all questionnaires are complete
        const allQuestionsComplete = questionnaires.every(questionnaire => 
            questionnaire.Questions.every(category => 
                category.QuestionList.every(question => {
                    const answerObj = answers.find(a => a.questionnaireId === question.questionnaireId);
                    if (!answerObj) return false;

                    if (question.questionType === 1) { // Multiple choice
                        if (!answerObj.options || answerObj.options.length === 0) return false;
                    }

                    // Check required descriptions for selected options
                    if (question.questionType === 1 || question.questionType === 2) { // Multiple or Single choice
                        const selectedOptions = answerObj.options.filter(option => 
                            option.isDescriptionMandatory && option.isChecked
                        );
                        
                        return selectedOptions.every(option => 
                            option.description !== undefined && option.description !== null
                        );
                    }

                    return true;
                })
            )
        );
        
        setIsValid(allQuestionsComplete);
    }, [answers, descriptions, setIsValid, questionnaires]);

    const handleAnswerChange = (questionnaireId, value, questionType) => {
        setAnswers(prev => {
            const existingAnswerIndex = prev.findIndex(a => a.questionnaireId === questionnaireId);
            let newAnswer;

            if (questionType === 1) { // Multiple choice
                newAnswer = {
                    id: existingAnswerIndex >= 0 ? prev[existingAnswerIndex].id : 0,
                    questionnaireId,
                    reportId: requestId,
                    options: value.map(title => ({
                        id: `${questionnaireId}Answer`,
                        title,
                        isDescriptionMandatory: false,
                        isDescriptionShow: false,
                        isChecked: true,
                        TypeId: 0
                    }))
                };
            } else if (questionType === 2) { // Single choice
                newAnswer = {
                    id: existingAnswerIndex >= 0 ? prev[existingAnswerIndex].id : 0,
                    questionnaireId,
                    reportId: requestId,
                    options: [{
                        id: `${questionnaireId}Answer`,
                        title: value,
                        isDescriptionMandatory: false,
                        isDescriptionShow: false,
                        isChecked: true,
                        TypeId: 0
                    }]
                };
            } else { // String or Number
                newAnswer = {
                    id: existingAnswerIndex >= 0 ? prev[existingAnswerIndex].id : 0,
                    questionnaireId,
                    reportId: requestId,
                    options: [{
                        id: "0",
                        title: "",
                        isDescriptionMandatory: false,
                        isDescriptionShow: false,
                        isChecked: true,
                        description: value,
                        TypeId: 2
                    }]
                };
            }

            if (existingAnswerIndex >= 0) {
                const newAnswers = [...prev];
                newAnswers[existingAnswerIndex] = newAnswer;
                return newAnswers;
            } else {
                return [...prev, newAnswer];
            }
        });
    };

    const handleDescriptionChange = (questionnaireId, optionTitle, text) => {
        setAnswers(prev => {
            const answerIndex = prev.findIndex(a => a.questionnaireId === questionnaireId);
            if (answerIndex === -1) return prev;

            const newAnswers = [...prev];
            const answer = { ...newAnswers[answerIndex] };
            const optionIndex = answer.options.findIndex(opt => opt.title === optionTitle);
            
            if (optionIndex !== -1) {
                answer.options[optionIndex] = {
                    ...answer.options[optionIndex],
                    description: text
                };
                newAnswers[answerIndex] = answer;
            }

            return newAnswers;
        });
    };

    const toggleGroup = (questionnaireId, categoryId) => {
        const uniqueGroupId = `${questionnaireId}_${categoryId}`;
        setExpandedGroups(prev => ({
            ...prev,
            [uniqueGroupId]: !prev[uniqueGroupId]
        }));
    };

    const renderDescriptionInput = (questionnaireId, option) => {
        if (!option.isDescriptionShow) return null;
        
        const answerObj = answers.find(a => a.questionnaireId === questionnaireId);
        if (!answerObj) return null;

        const selectedOption = answerObj.options.find(opt => opt.title === option.title);
        if (!selectedOption || !selectedOption.isChecked) return null;

        return (
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.descriptionInput}
                    value={selectedOption.description || ''}
                    onChangeText={(text) => handleDescriptionChange(questionnaireId, option.title, text)}
                    placeholder={option.description}
                    multiline
                    textAlignVertical="top"
                />
            </View>
        );
    };

    const renderQuestion = (question) => {
        const renderRequiredStar = () => (
            <Text style={styles.requiredStar}>*</Text>
        );

        const answerObj = answers.find(a => a.questionnaireId === question.questionnaireId);
        const currentAnswer = answerObj ? answerObj.options : [];

        switch (question.questionType) {
            case 1: // Multiple choice
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            currentAnswer.some(ans => ans.title === option.title) && styles.selectedOption
                                        ]}
                                        onPress={() => {
                                            const selectedTitles = currentAnswer
                                                .filter(ans => ans.title !== option.title)
                                                .map(ans => ans.title);
                                            
                                            if (!currentAnswer.some(ans => ans.title === option.title)) {
                                                selectedTitles.push(option.title);
                                            }
                                            
                                            handleAnswerChange(question.questionnaireId, selectedTitles, question.questionType);
                                        }}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            currentAnswer.some(ans => ans.title === option.title) && styles.selectedOptionText
                                        ]}>
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.questionnaireId, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 2: // Single choice
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            currentAnswer.some(ans => ans.title === option.title) && styles.selectedOption
                                        ]}
                                        onPress={() => handleAnswerChange(question.questionnaireId, option.title, question.questionType)}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            currentAnswer.some(ans => ans.title === option.title) && styles.selectedOptionText
                                        ]}>
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.questionnaireId, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 3: // String
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={currentAnswer[0]?.description || ''}
                            onChangeText={(text) => handleAnswerChange(question.questionnaireId, text, question.questionType)}
                            multiline
                            textAlignVertical="top"
                        />
                    </View>
                );

            case 4: // Number
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={currentAnswer[0]?.description || ''}
                            onChangeText={(text) => {
                                if (text === '' || /^\d+$/.test(text)) {
                                    handleAnswerChange(question.questionnaireId, text, question.questionType);
                                }
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                );

            default:
                return null;
        }
    };

    const renderQuestionGroup = (questionnaire, category) => {
        const uniqueGroupId = `${questionnaire.Id}_${category.categoryId}`;
        const isExpanded = expandedGroups[uniqueGroupId] !== false;
        const isComplete = category.QuestionList.every(question => {
            const answerObj = answers.find(a => a.questionnaireId === question.questionnaireId);
            if (!answerObj) return false;

            if (question.questionType === 1) {
                if (!answerObj.options || answerObj.options.length === 0) return false;
            }

            if (question.questionType === 1 || question.questionType === 2) {
                const selectedOptions = answerObj.options.filter(option => 
                    option.isDescriptionMandatory && option.isChecked
                );
                
                return selectedOptions.every(option => 
                    option.description !== undefined && option.description !== null
                );
            }

            return true;
        });

        return (
            <View key={uniqueGroupId} style={styles.groupContainer}>
                <TouchableOpacity 
                    style={styles.groupHeader}
                    onPress={() => toggleGroup(questionnaire.Id, category.categoryId)}
                >
                    <View style={styles.groupHeaderContent}>
                        <Ionicons 
                            name={isExpanded ? "chevron-down" : "chevron-forward"} 
                            size={20} 
                            color={colors.darkBackground} 
                        />
                        <Text style={[
                            styles.groupTitle,
                            isComplete && styles.completeGroupTitle
                        ]}>
                            {category.categoryTitle}
                        </Text>
                    </View>
                    {isComplete && (
                        <Ionicons 
                            name="checkmark-circle" 
                            size={20} 
                            color={colors.emerald} 
                        />
                    )}
                </TouchableOpacity>
                {isExpanded && category.QuestionList.map(question => (
                    <View key={question.questionnaireId}>
                        {renderQuestion(question)}
                    </View>
                ))}
            </View>
        );
    };

    const renderQuestionnaire = (questionnaire) => (
        <View key={questionnaire.Id} style={styles.questionnaireContainer}>
            <Text style={styles.questionnaireTitle}>{questionnaire.Title}</Text>
            {questionnaire.Questions.map(category => renderQuestionGroup(questionnaire, category))}
        </View>
    );

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>در حال بارگیری اطلاعات...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {questionnaires.map(questionnaire => renderQuestionnaire(questionnaire))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'iransansbold',
    },
    questionnaireContainer: {
        marginBottom: 5,
    },
    questionnaireTitle: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color: colors.darkBackground,
        marginBottom: 0,
        textAlign: 'right',
    },
    groupContainer: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    groupHeader: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    groupHeaderContent: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    groupTitle: {
        fontFamily: 'iransansbold',
        fontSize: 13,
        color: colors.darkBackground,
        marginRight: 10,
    },
    completeGroupTitle: {
        color: colors.emerald,
    },
    questionContainer: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    questionHeader: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    questionText: {
        fontFamily: 'iransansbold',
        fontSize: 13,
        color: colors.darkBackground,
    },
    optionsContainer: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    optionWrapper: {
        width: '100%',
        marginBottom: 5,
    },
    optionButton: {
        backgroundColor: colors.lightBackground,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: colors.lightgray,
    },
    selectedOption: {
        backgroundColor: colors.blue,
        borderColor: colors.blue,
    },
    optionText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.darkBackground,
        textAlign: 'center',
    },
    selectedOptionText: {
        color: colors.white,
    },
    descriptionContainer: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    descriptionInput: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 8,
        padding: 10,
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'right',
        minHeight: 60,
        backgroundColor: colors.antiflashWhite,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'center',
    },
    requiredStar: {
        color: colors.red,
        fontSize: 16,
        marginRight: 5,
    },
});

export default ReportQuestionnaire; 